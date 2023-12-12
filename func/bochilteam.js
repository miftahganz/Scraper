const scrape = require('@bochilteam/scraper')
async function downloadTikTok(url) {
  try {
    const result = await scrape.tiktokdl(url);
    return result;
  } catch (error) {
    console.error(error);
  }
      }
module.exports = { downloadTikTok }
