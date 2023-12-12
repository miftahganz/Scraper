**note !!**:*ini hanya kumpulan data scraping dari modul lain yang masih work, jangan lupa kasih star dan beri tau jika ada yang error*

## Daftar Menu

- [Instalasi](#instalasi)
- [Pemanggilan](#pemanggilan)
- [Penggunaan](#penggunaan)
- [Daftar Fungsi](#daftar-fungsi)

## Instalasi

Untuk menginstal modul ini, jalankan perintah berikut menggunakan npm:

```shell
npm install github:Rikikangsc2/scrape
```

## Pemanggilan

Dalam kode JavaScript Anda, impor modul ini menggunakan pernyataan berikut:

```javascript
const all = require('scrape');
```

## Penggunaan

Untuk menggunakan modul ini, Anda dapat memanggil fungsi-fungsi yang tersedia. Berikut adalah contoh penggunaan:

```javascript
const query = 'contoh query';
const result = await all.gpt(query);
console.log(result);
```
[contoh penggunaan](https://github.com/Rikikangsc2/scrape/blob/main/exemple.md)

## Daftar Fungsi

Berikut ini adalah daftar fungsi yang dapat Anda gunakan:

- `bard(query)` : chat with google bar
  
- `gpt(query)`: chat with ChatGPT

- `play(query)`: Download audio or video from YouTube

- `tiktok(url)`: Download video tiktok 

## packages and APIs that use this module !!
  - https://urlis.net/azz
  - axios
  - @bochilteam/scraper
