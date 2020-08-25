// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.subject || "World";
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello, ${subject}.`,
        secrets: {
          client_id: process.environment.CLIENT_ID,
          client_secret: process.environment.CLIENT_SECRET
        }
      }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
