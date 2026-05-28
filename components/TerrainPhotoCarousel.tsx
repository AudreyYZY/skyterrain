"use client";

import { VISUAL_TYPE_LABEL } from "@/lib/terrain-visuals";
import type { TerrainVisualAsset } from "@/types/terrain-visual";
import { useCallback, useState } from "react";

interface TerrainPhotoCarouselProps {
  images: TerrainVisualAsset[];
  terrainName: string;
}

export default function TerrainPhotoCarousel({
  images,
  terrainName,
}: TerrainPhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  if (images.length === 0) return null;

  const current = images[currentIndex]!;

  return (
    <>
      {/* Carousel */}
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-[16/10] w-full bg-white/[0.03]">
          {/* 占位：未来加载真实图片 */}
          <div className="flex h-full items-center justify-center">
            <p className="text-xs text-white/20">
              {terrainName} · {VISUAL_TYPE_LABEL[current.type] ?? current.type}
            </p>
          </div>
        </div>

        {/* 图片信息覆盖层 */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <p className="text-[11px] font-medium text-white/90">{current.title}</p>
          <p className="text-[10px] text-white/50">{current.credit}</p>
        </div>

        {/* 导航按钮 */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white/70 transition hover:bg-black/60 hover:text-white"
              aria-label="上一张"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white/70 transition hover:bg-black/60 hover:text-white"
              aria-label="下一张"
            >
              ›
            </button>
          </>
        )}

        {/* 页码指示 */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={[
                  "h-1 w-1 rounded-full transition",
                  i === currentIndex ? "bg-white/80" : "bg-white/30",
                ].join(" ")}
                aria-label={`第 ${i + 1} 张`}
              />
            ))}
          </div>
        )}

        {/* 放大按钮 */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="absolute right-3 top-3 rounded-lg bg-black/40 px-2 py-1 text-[10px] text-white/70 transition hover:bg-black/60 hover:text-white"
        >
          查看大图
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-h-[80vh] max-w-[80vw] rounded-2xl bg-[#0a0e12] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-white/50 hover:text-white"
            >
              ✕
            </button>
            <div className="aspect-[16/10] w-[60vw] bg-white/[0.03] rounded-xl flex items-center justify-center">
              <p className="text-sm text-white/20">
                {terrainName} · {current.title}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-white/90">{current.title}</p>
              <p className="mt-1 text-xs text-white/50">{current.credit}</p>
              <p className="mt-1 text-[10px] text-white/30">
                来源：{current.source}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
