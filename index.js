/**
 * random-hex-color
 * Library sederhana untuk menghasilkan warna acak dalam format hexadecimal.
 */

/**
 * Menghasilkan satu warna acak dalam format hexadecimal, misal "#a3f5c1".
 * @param {Object} [options]
 * @param {boolean} [options.uppercase=false] - Jika true, hasil huruf besar (misal "#A3F5C1").
 * @param {boolean} [options.withHash=true] - Jika false, hasil tanpa tanda pagar (misal "a3f5c1").
 * @returns {string} Kode warna hexadecimal.
 */
function randomHexColor(options = {}) {
  const { uppercase = false, withHash = true } = options;

  // Angka acak 0 - 16777215 (0xFFFFFF), lalu diubah ke basis 16.
  let hex = Math.floor(Math.random() * 0xffffff).toString(16);

  // Pastikan panjangnya selalu 6 digit (padding dengan nol di depan jika kurang).
  hex = hex.padStart(6, "0");

  if (uppercase) {
    hex = hex.toUpperCase();
  }

  return withHash ? `#${hex}` : hex;
}

/**
 * Menghasilkan beberapa warna acak sekaligus dalam bentuk array.
 * @param {number} count - Jumlah warna yang ingin dihasilkan.
 * @param {Object} [options] - Opsi yang sama seperti randomHexColor().
 * @returns {string[]} Array kode warna hexadecimal.
 */
function randomHexColors(count = 1, options = {}) {
  if (!Number.isInteger(count) || count < 1) {
    throw new Error("count harus berupa bilangan bulat positif");
  }

  return Array.from({ length: count }, () => randomHexColor(options));
}

/**
 * Mengecek apakah sebuah string merupakan kode warna hexadecimal yang valid.
 * @param {string} color - String yang ingin dicek, misal "#fff" atau "#a3f5c1".
 * @returns {boolean} True jika valid.
 */
function isValidHexColor(color) {
  if (typeof color !== "string") return false;
  return /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color);
}

module.exports = {
  randomHexColor,
  randomHexColors,
  isValidHexColor,
};
