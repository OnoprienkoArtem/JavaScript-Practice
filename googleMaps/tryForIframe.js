       var iframeElement = document.getElementById('itineraire-frame');

       console.dir(iframeElement);
       console.dir(iframeElement.contentWindow.document);
       console.dir(iframeElement.contentWindow.document.getElementsByTagName("head")[0]);

       var iframeHead = iframeElement.contentWindow.document.getElementsByTagName("head")[0];

       var style = document.createElement('style');
       style.setAttribute('type', 'text/css');
       style.textContent = `.default-card { display: none !important; }`;

       var defaultCard = document.querySelector('.default-card');

       console.log(defaultCard);

       iframeHead.appendChild(style);