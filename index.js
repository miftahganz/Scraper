const botika = require('./func/botika.js');
const azzapi = require('./func/azzapi.js');
const bochilteam = require('./func/bochilteam.js')

async function gpt(query) {
  try {
    const result = await botika.openai(query);
    return result;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

async function play(query){
  try {
    const result = await azzapi.modulPlay(query);
    return result
  } catch (error) {
    console.error(error)
  }
}
async function bard(query){
  try {
    const result = await azzapi.gbard(query);
    return result
  } catch (error) {
    console.error(error)
  }
}
async function tiktok(query) {
  try {
    const result = await bochilteam.downloadTikTok(query);
    return result;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

module.exports = { gpt, play, bard, tiktok };
  
