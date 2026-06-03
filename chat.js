export const handler = async (event) => {
  // Sirf POST requests allow karein
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body);
    const userMessage = body.message;
    
    // Netlify environment variable se API key fetch hogi (Frontend par kisi ko nahi dikhegi)
    const apiKey = AIzaSyAX_1BvyJKFLjXPO_H6GuWacvHTLKqmTBU; 

    // Google Gemini API ko request bhejna
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMessage }] }]
      })
    });

    const data = await response.json();
    const aiReply = data.candidates[0].content.parts[0].text;

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: aiReply }),
    };
    
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "AI Assistant abhi busy hai, thodi der mein try karein." }) 
    };
  }
};
