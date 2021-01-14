const path = require("path");
const express = require("express");
const app = express();
console.log('dirname', __dirname)

app.use(express.static(path.join(__dirname)));
app.get('/*', function(req,res){
res.sendFile(path.join(__dirname, 'odt.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 1111);
