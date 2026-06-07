/**
 * NarrationManager — 全局叙述会话管理器
 *
 * 确保同一时间只有一个叙述会话活跃。
 * 防止多个 Audio 同时播放。
 * 将高亮状态绑定到活跃会话。
 */

export interface NarrationSession {
  /** 唯一会话 ID */
  id: string;
  /** 是否活跃 */
  active: boolean;
  /** 取消函数 */
  cancel: () => void;
}

class NarrationManager {
  private currentSession: NarrationSession | null = null;
  private sessionIdCounter = 0;

  /**
   * 创建新会话。如果已有活跃会话，先取消。
   * 返回会话对象，调用方必须检查 session.active 以判断是否被取消。
   */
  createSession(): NarrationSession {
    // 取消现有会话
    if (this.currentSession) {
      this.currentSession.cancel();
      this.currentSession.active = false;
    }

    this.sessionIdCounter++;
    const session: NarrationSession = {
      id: `narration-${this.sessionIdCounter}`,
      active: true,
      cancel: () => {
        session.active = false;
      },
    };

    this.currentSession = session;
    return session;
  }

  /**
   * 取消当前会话。
   */
  cancelCurrent(): void {
    if (this.currentSession) {
      this.currentSession.cancel();
      this.currentSession = null;
    }
  }

  /**
   * 获取当前会话。
   */
  getCurrent(): NarrationSession | null {
    return this.currentSession;
  }

  /**
   * 检查是否有活跃会话。
   */
  isActive(): boolean {
    return this.currentSession?.active ?? false;
  }
}

/** 全局单例 */
export const narrationManager = new NarrationManager();
