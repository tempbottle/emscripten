function skinning(i1, i3, i5, i19, i4) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i5 = i5 | 0;
 i19 = i19 | 0;
 i4 = i4 | 0;
 var i2 = 0, i6 = 0, d7 = 0, d8 = 0, d9 = 0, d10 = 0, d11 = 0, d12 = 0, d13 = 0, d14 = 0, d15 = 0, d16 = 0, d17 = 0, d18 = 0, i20 = 0, d21 = 0, i22 = 0;
 i2 = STACKTOP;
 if (!i3) {
  STACKTOP = i2;
  return;
 }
 while (1) {
  i3 = i3 + -1 | 0;
  i6 = HEAP32[i19 >> 2] | 0;
  d8 = +HEAPF32[i19 + 4 >> 2];
  d9 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) >> 2];
  d14 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 4 >> 2];
  d7 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 8 >> 2];
  d11 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 12 >> 2];
  d12 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 16 >> 2];
  d15 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 20 >> 2];
  d16 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 24 >> 2];
  d17 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 28 >> 2];
  d18 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 32 >> 2];
  d13 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 36 >> 2];
  d10 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 40 >> 2];
  d8 = d8 * +HEAPF32[i1 + (i6 * 48 | 0) + 44 >> 2];
 }
 HEAP32[tempDoublePtr + 4 >> 2] | 0;
 HEAP8[10] = 15;
 HEAP32[tempDoublePtr + 4 >> 2] | 0;
}
function _i64Subtract(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var h = 0;
 h = b - d >>> 0;
 h = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (tempRet0 = h, a - c >>> 0 | 0) | 0;
}
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["skinning", "_i64Subtract"]