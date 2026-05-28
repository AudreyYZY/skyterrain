import { identifyPhotoFromWindow } from "@/lib/mimo-photo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const imageBase64 = body?.imageBase64 as string | undefined;
    const hint = body?.hint as string | undefined;

    if (!imageBase64 || typeof imageBase64 !== "string") {
      return NextResponse.json(
        { error: "请提供 imageBase64 图片数据" },
        { status: 400 }
      );
    }

    if (imageBase64.length > 8_000_000) {
      return NextResponse.json(
        { error: "图片过大，请压缩后重试" },
        { status: 400 }
      );
    }

    const result = await identifyPhotoFromWindow(imageBase64, hint);
    return NextResponse.json(result);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "照片识别失败";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
