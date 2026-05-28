import { generateLesson } from "@/lib/mimo";
import { getTerrainById } from "@/lib/terrain";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const terrainId = body?.terrainId as string | undefined;

    if (!terrainId) {
      return NextResponse.json(
        { error: "请提供 terrainId" },
        { status: 400 }
      );
    }

    const terrain = getTerrainById(terrainId);

    if (!terrain) {
      return NextResponse.json(
        { error: "未找到该地貌数据" },
        { status: 404 }
      );
    }

    const lesson = await generateLesson(terrain);

    return NextResponse.json({
      terrainId: terrain.id,
      name: terrain.name,
      cards: terrain.cards,
      lesson,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "生成讲解失败";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
