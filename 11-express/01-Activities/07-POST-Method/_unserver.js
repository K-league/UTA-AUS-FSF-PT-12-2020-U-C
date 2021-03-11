// handle post requests in a different url, accepting form data
// don't forget to change the form action attribute to be 8080 & add method="POST"


// // Dependencies
// const http = require('http');
// const fs = require('fs');

// // Set our port to 8080
// const PORT = 8080;

// // Create a function for handling the requests and responses coming into our server
// const handleRequest = (req, res) => {
//   // Here we use the fs package to read our index.html file
//   fs.readFile(`${__dirname}/index.html`, (err, htmlContent) => {
//     if (err) throw err;
//     let requestData = '';

//     // When the server receives data...
//     req.on('data', (reqPartialData) => {
//       // Add it to requestData.
//       requestData += reqPartialData;
//     }).on('end', () => {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       if(req.url == "/thanks" && req.method == "POST") {
//         console.log(requestData);
//         res.end("Thank you for sending us your data");
//       } else {
//         res.end(htmlContent);
//       }
//     });
//     // console.log(req.method);
//     // console.log(req.url);
//     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//     // an html file.
    
//   });
// };

// // Create our server
// const server = http.createServer(handleRequest);

// // Starts our server
// server.listen(PORT, () => {
//   console.log(`Server is listening on PORT: ${PORT}`);
// });
