javascript:(function () {
  var url = 'https://raw.githubusercontent.com/THeHamBurgueler/AmongUsfun/main/AmongUs.js';

  function openWindow() {
    var newWindow = window.open('javascript:(function() { var url = \'' + url + '\'; fetch(url).then(response => response.text()).then(code => { var script = document.createElement(\'script\'); script.textContent = code; document.body.appendChild(script); }).catch(error => console.error(\'Error fetching bookmarklet:\', error)); })()', '_blank');
    setTimeout(openWindow, 100); // Adjust the delay (in milliseconds) between each window opening if desired
  }

  openWindow();
})();
