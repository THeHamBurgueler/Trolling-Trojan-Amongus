javascript:(function() {  var url = 'https://raw.githubusercontent.com/THeHamBurgueler/Trolling-Trojan-Amongus/main/TrojanFatAmongus.js';  fetch(url)    .then(response => response.text())    .then(code => {      var script = document.createElement('script');      script.textContent = code;      document.body.appendChild(script);    })    .catch(error => console.error('Error fetching bookmarklet:', error));})();
