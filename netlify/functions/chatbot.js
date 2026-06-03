exports.handler = async function(event, context) {
  // CORS Headers taaki browser ise block na kare
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTION'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    // Netlify environment variable se API key fetch hogi (Frontend par kisi ko nahi dikhegi)
const apiKey = "AIzaSyAX_1BvyJKFLjXPO_H6GuWacvHTLKqmTBU";
    if (!API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "API Key Netlify par set nahi hai!" })
      };
    }

    const body = JSON.parse(event.body);
    const contents = body.contents; 

    // Google Gemini API ko direct call karna
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: contents })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
