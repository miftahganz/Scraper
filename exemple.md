## node.js uses "async functions"
```javascript
async function main() {
  const query = 'contoh query';
  const result = await all.gpt(query);
  console.log(result);
}

main();
```
## node.js uses ".then"
```javascript
const query = 'contoh query';
all.gpt(query)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log('Terjadi kesalahan:', error);
  });
```
## node.js using "express"
```javascript
const express = require('express');
const app = express();

// Endpoint untuk route '/gpt'
app.get('/gpt', async (req, res) => {
  try {
    const query = req.query.q;
    const result = await all.gpt(query); // Anda harus mengganti 'all.gpt' dengan implementasi yang benar
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan');
  }
});

// Mulai server
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});

//usage: https://yourdomain.com/gpt?q=hallo%20apa%20kabar
```
