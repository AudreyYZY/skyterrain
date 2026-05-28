import { EdgeTTS } from "edge-tts-universal";
import { NextResponse } from "next/server";

const MAX_CHARS = 6000;
const DEFAULT_VOICE = "zh-CN-XiaoxiaoNeural";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const text = (body?.text as string | undefined)?.trim();
    const voice = (body?.voice as string | undefined) ?? DEFAULT_VOICE;

    if (!text) {
      return NextResponse.json({ error: "请提供 text" }, { status: 400 });
    }

    const clipped = text.slice(0, MAX_CHARS);
    const tts = new EdgeTTS(clipped, voice, {
      rate: "-5%",
      pitch: "+0Hz",
    });
    const { audio } = await tts.synthesize();
    const buffer = Buffer.from(await audio.arrayBuffer());

    return new Response(buffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "语音合成失败";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
