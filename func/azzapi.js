const axios = require('axios');
const googleIt = require('google-it');

async function gbard(query) {
  try {
    const sender = Date.now();
    const text = query

    // Melakukan pencarian Google
    const searchResults = await googleIt({ 'query': text, 'limit': 10 });
    const articles = searchResults.map(result => ({
      title: result.title || 'No title',
      snippet: result.snippet || 'No snippet',
      link: result.link || 'No link'
    }));

    const artikles = `1. Title: ${articles[0] ? articles[0].title || "no title" : "no article"}\nSnippet: ${articles[0] ? articles[0].snippet || "no snippet" : "no article"}\nLink: ${articles[0] ? articles[0].link || "no link" : "no article"}\n\n2. Title: ${articles[1] ? articles[1].title || "no title" : "no article"}\nSnippet: ${articles[1] ? articles[1].snippet || "no snippet" : "no article"}\nLink: ${articles[1] ? articles[1].link || "no link" : "no article"}\n\n3. Title: ${articles[2] ? articles[2].title || "no title" : "no article"}\nSnippet: ${articles[2] ? articles[2].snippet || "no snippet" : "no article"}\nLink: ${articles[2] ? articles[2].link || "no link" : "no article"}\n\n4. Title: ${articles[3] ? articles[3].title || "no title" : "no article"}\nSnippet: ${articles[3] ? articles[3].snippet || "no snippet" : "no article"}\nLink: ${articles[3] ? articles[3].link || "no link" : "no article"}\n\n5. Title: ${articles[4] ? articles[4].title || "no title" : "no article"}\nSnippet: ${articles[4] ? articles[4].snippet || "no snippet" : "no article"}\nLink: ${articles[4] ? articles[4].link || "no link" : "no article"}\n\n6. Title: ${articles[5] ? articles[5].title || "no title" : "no article"}\nSnippet: ${articles[5] ? articles[5].snippet || "no snippet" : "no article"}\nLink: ${articles[5] ? articles[5].link || "no link" : "no article"}\n\n7. Title: ${articles[6] ? articles[6].title || "no title" : "no article"}\nSnippet: ${articles[6] ? articles[6].snippet || "no snippet" : "no article"}\nLink: ${articles[6] ? articles[6].link || "no link" : "no article"}\n\n8. Title: ${articles[7] ? articles[7].title || "no title" : "no article"}\nSnippet: ${articles[7] ? articles[7].snippet || "no snippet" : "no article"}\nLink: ${articles[7] ? articles[7].link || "no link" : "no article"}\n\n9. Title: ${articles[8] ? articles[8].title || "no title" : "no article"}\nSnippet: ${articles[8] ? articles[8].snippet || "no snippet" : "no article"}\nLink: ${articles[8] ? articles[8].link || "no link" : "no article"}\n\n10. Title: ${articles[9] ? articles[9].title || "no title" : "no article"}\nSnippet: ${articles[9] ? articles[9].snippet || "no snippet" : "no article"}\nLink: ${articles[9] ? articles[9].link || "no link" : "no article"}`;

    const payload = {
      app: {
        id: "blaael9y3cu1684390361270",
        time: Date.now(),
        data: {
          sender: {
            id: sender + "AzzBot beta"
          },
          message: [
            {
              id: Date.now(),
              time: Date.now(),
              type: "text",
              value: `Kamu adalah Bard sebuah AI yang di buat oleh Google, Kamu mempunyai kemampuan untuk mencari berita terbaru, namun kamu bukan hanya itu saja kemampuan nya kamu bisa apa pun.

Pengetahuan: [${artikles}]
Pertanyaan: ${text}`
            }
          ]
        }
      }
    };


    const webhookUrl = 'https://webhook.botika.online/webhook/';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer fbe3d5e1-00a8-4328-8482-53a09a2433e2'
    };

    const webhookResponse = await axios.post(webhookUrl, payload, { headers });
    const { data, status } = webhookResponse;

    if (status === 200) {
      const messages = data.app.data.message;

      if (Array.isArray(messages)) {
        const responseMessages = messages.map((message) => message.value);
        const combinedResponse = responseMessages.join('\n');
        const updatedMessages = combinedResponse.replace(/<br>|<\/br>|<BR>/g, "\n\n");
        return updatedMessages
      } else {
        return "Iya, ada yang bisa AzzBot bantu.";
      }
    } else {
      return "Server down";
    }
  } catch (error) {
    console.log(error);
    return "Internal server error";
  }
}
async function modulPlay(query) {
  try {
    const url = `https://biodegradablearidkernel--rikipurwanto.repl.co/play?text=${encodeURIComponent(query)}`;
    const response = await axios.get(url);
    const data = response.data;
    // Lakukan sesuatu dengan data yang diperoleh
    return data
  } catch (error) {
    console.error(error);
  }
}
module.exports = { gbard, modulPlay }