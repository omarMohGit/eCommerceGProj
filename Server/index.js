let express = require('express');

let app = express();
app.use(function(request, response,next){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.static('public'));
app.get("/", function(request, response){
    response.send("Client accessing price of products");_

});

app.get("/UpdatePrices", function(request, response){
    response.sendFile(__dirname + '/StockPriceInfo.json');
});


//Here I decide the port that iistens too
app.set('port', 2500);
app.listen(app.get('port'),function(){
    console.log(`The backend server is running on port ${app.get('port')}`);
});
