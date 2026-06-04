import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["cesium"],
  serverExternalPackages: ["ws", "bufferutil"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        http: false,
        https: false,
        zlib: false,
        url: false,
      };
    }

    // Fix octal escape sequences in Cesium's compiled WebAssembly loader
    // @spz-loader/core uses octal escapes that break in strict mode
    config.plugins = config.plugins || [];
    config.plugins.push({
      apply: (compiler: any) => {
        compiler.hooks.compilation.tap("FixOctalEscapes", (compilation: any) => {
          compilation.hooks.processAssets.tap(
            {
              name: "FixOctalEscapes",
              stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE,
            },
            (assets: any) => {
              for (const [name, source] of Object.entries(assets)) {
                if (!name.endsWith(".js")) continue;
                const src = source as any;
                const content = src.source();
                if (typeof content === "string" && content.includes("\\")) {
                  // Convert octal escapes to hex escapes
                  const fixed = content.replace(
                    /\\([0-7]{1,3})/g,
                    (_, octal) => `\\x${parseInt(octal, 8).toString(16).padStart(2, "0")}`
                  );
                  if (fixed !== content) {
                    compilation.updateAsset(name, new compiler.webpack.sources.RawSource(fixed));
                  }
                }
              }
            }
          );
        });
      },
    });

    return config;
  },
};

export default nextConfig;
