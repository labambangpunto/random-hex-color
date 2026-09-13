# random-hex-color

Library JavaScript sederhana untuk menghasilkan warna acak dalam format hexadecimal.

## Instalasi

Cukup salin folder ini ke proyekmu, atau publish ke npm lalu install seperti biasa:

```bash
npm install random-hex-color
```

## Penggunaan

```js
const {
  randomHexColor,
  randomHexColors,
  isValidHexColor,
} = require("random-hex-color");

// Satu warna acak, contoh: "#a3f5c1"
randomHexColor();

// Warna acak huruf besar, contoh: "#A3F5C1"
randomHexColor({ uppercase: true });

// Warna acak tanpa tanda pagar, contoh: "a3f5c1"
randomHexColor({ withHash: false });

// Menghasilkan beberapa warna sekaligus
randomHexColors(5);
// -> ['#b8a7e9', '#d797e0', '#9cb1ef', '#b09c45', '#21a0ff']

// Mengecek validitas kode hex
isValidHexColor("#ffffff"); // true
isValidHexColor("xyz123"); // false
```

## API

| Fungsi                             | Deskripsi                                                         |
| ---------------------------------- | ----------------------------------------------------------------- |
| `randomHexColor(options?)`         | Menghasilkan satu warna hex acak. Opsi: `uppercase`, `withHash`.  |
| `randomHexColors(count, options?)` | Menghasilkan array warna hex acak sebanyak `count`.               |
| `isValidHexColor(color)`           | Mengembalikan `true`/`false` apakah string adalah kode hex valid. |

## Menjalankan test

```bash
npm test
```
