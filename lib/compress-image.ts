/** 上传前压缩，避免 base64 过大导致 API 失败 */
export async function compressImageForUpload(
  dataUrl: string,
  maxEdge = 1280,
  quality = 0.82
): Promise<string> {
  if (typeof document === "undefined") return dataUrl;

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      const scale = Math.min(1, maxEdge / Math.max(width, height));
      width = Math.round(width * scale);
      height = Math.round(height * scale);

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(dataUrl);
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => reject(new Error("图片读取失败"));
    img.src = dataUrl;
  });
}
