/**
 * 叙述队列 — 保证叙述按顺序执行，不重叠
 * 支持取消、暂停、优先级
 */

export type NarrationPriority = "high" | "normal" | "low";

interface NarrationTask {
  id: string;
  text: string;
  rate: number;
  priority: NarrationPriority;
  onStart: () => void;
  onComplete: () => void;
  onError: (err: unknown) => void;
}

interface NarrationQueueOptions {
  /** 叙述之间的间隔（毫秒） */
  gapMs: number;
  /** 默认语速 */
  defaultRate: number;
}

const DEFAULT_OPTIONS: NarrationQueueOptions = {
  gapMs: 800,
  defaultRate: 0.88,
};

export class NarrationQueue {
  private queue: NarrationTask[] = [];
  private isPlaying = false;
  private currentTask: NarrationTask | null = null;
  private cancelled = false;
  private speakFn: ((text: string, rate: number) => Promise<void>) | null = null;
  private stopFn: (() => void) | null = null;
  private options: NarrationQueueOptions;

  constructor(options: Partial<NarrationQueueOptions> = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }

  /** 注册语音函数（由 ExplorerApp 提供） */
  register(
    speak: (text: string, rate: number) => Promise<void>,
    stop: () => void
  ): void {
    this.speakFn = speak;
    this.stopFn = stop;
  }

  /** 添加叙述任务到队列 */
  enqueue(
    text: string,
    options: {
      priority?: NarrationPriority;
      rate?: number;
      id?: string;
    } = {}
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const task: NarrationTask = {
        id: options.id ?? `narration-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        text,
        rate: options.rate ?? this.options.defaultRate,
        priority: options.priority ?? "normal",
        onStart: () => {},
        onComplete: resolve,
        onError: reject,
      };

      // 高优先级任务插入队列前面
      if (task.priority === "high") {
        this.queue.unshift(task);
      } else {
        this.queue.push(task);
      }

      this.processNext();
    });
  }

  /** 立即播放叙述（跳过队列） */
  async playImmediate(
    text: string,
    rate?: number
  ): Promise<void> {
    if (!this.speakFn) return;

    // 取消当前队列中的所有任务
    this.clearQueue();

    this.cancelled = false;
    this.isPlaying = true;

    try {
      await this.speakFn(text, rate ?? this.options.defaultRate);
    } finally {
      this.isPlaying = false;
      this.currentTask = null;
    }
  }

  /** 处理队列中的下一个任务 */
  private async processNext(): Promise<void> {
    if (this.isPlaying || this.queue.length === 0 || !this.speakFn) return;

    const task = this.queue.shift()!;
    this.currentTask = task;
    this.isPlaying = true;
    this.cancelled = false;

    task.onStart();

    try {
      await this.speakFn(task.text, task.rate);

      if (!this.cancelled) {
        // 叙述间隔
        await new Promise((r) => setTimeout(r, this.options.gapMs));
        task.onComplete();
      } else {
        task.onComplete();
      }
    } catch (err) {
      if (!this.cancelled) {
        task.onError(err);
      } else {
        task.onComplete();
      }
    } finally {
      this.isPlaying = false;
      this.currentTask = null;
      // 继续处理下一个
      this.processNext();
    }
  }

  /** 取消当前叙述并清空队列 */
  cancel(): void {
    this.cancelled = true;
    this.clearQueue();
    if (this.stopFn) {
      this.stopFn();
    }
    this.isPlaying = false;
    this.currentTask = null;
  }

  /** 清空队列（不取消当前播放） */
  clearQueue(): void {
    // 通知所有等待中的任务完成
    for (const task of this.queue) {
      task.onComplete();
    }
    this.queue = [];
  }

  /** 队列中还有任务 */
  get pending(): boolean {
    return this.queue.length > 0;
  }

  /** 当前正在播放 */
  get playing(): boolean {
    return this.isPlaying;
  }

  /** 队列长度 */
  get length(): number {
    return this.queue.length;
  }
}

/** 全局叙述队列实例 */
export const narrationQueue = new NarrationQueue({ gapMs: 800, defaultRate: 0.88 });
