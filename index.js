const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// // Write the string to a file
// fs.writeFile(`./db/db.json`, reviewString, (err) =>
// err
//   ? console.error(err)
//   : console.log(
//       `Review for ${newReview.product} has been written to JSON file`
//     )
// );
// 5 routes(including bonus), static folder route
// fs.writefile in POST route 
// GET request
app.get('/api/notes', (req, res) => {
    // Let the client know that their request was received
    res.json(`${req.method} request received`);
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });
  
  // POST request
  app.post('/api/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });
  
  app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
  );
  
// fs.appendFile.(inside get route)
// <!-- db.json file, create express server app.get(/api/routes) read file system, present data as response -->
// <!--  -->