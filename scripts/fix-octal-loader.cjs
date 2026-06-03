/**
 * Webpack loader to fix octal escape sequences in Cesium's source code.
 *
 * Cesium's precompiled bundles contain \0 (octal null) inside template literals
 * from @spz-loader/core's WASM binary loader. This is invalid in strict mode.
 *
 * This loader replaces \0 with \x00 (hex escape) before webpack parses.
 */

module.exports = function fixOctalLoader(source) {
  if (!source.includes('\\0')) {
    return source;
  }

  const parts = source.split('\\0');
  if (parts.length > 1) {
    return parts.join('\\x00');
  }

  return source;
};
