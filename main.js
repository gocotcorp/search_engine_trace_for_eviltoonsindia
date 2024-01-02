document.write('<h1></h1>');document.body.innerHTML += '<center>'+'<div class="div"><h2>SearchAnyThing</h2><br><input placeholder="SearchFor..." id="inp"><br><br><button id="ser">go</button></div>'+'</center>';
document.getElementById('ser').addEventListener('click',function(){
  document.write('<a id="sr" href="https://eviltoonsindia.blogspot.com/search?q='+document.getElementById('inp').value+'">'+'Processing the IP of the search engine.... (this might take a few seconds)</a>');
  document.getElementById('sr').click();
  
})
/*for (var i = 1;i <= 100;i++){
  document.body.innerHTML += '<!--IP-TRACE-2024-BY-GTG(' + crypto.randomUUID() + 'UserSecurityKey->' + crypto.randomUUID() + 'CryptoID.done()-->';
}*/