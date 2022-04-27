var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://127.0.0.1:2500/UpdatePrices');
ourRequest.onload = function(){
    console.log(ourRequest.responseText);
}

//This actually sends our request to the webpage hosted by our server
ourRequest.send();