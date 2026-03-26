(function () {
    'use strict';

    const remoteUrl = 'https://raw.githubusercontent.com/hungkdz/EDUSO/refs/heads/main/remote';

    GM_xmlhttpRequest({
        method: "GET",
        url: remoteUrl,
        timeout: 10000,
        onload: function (response) {
            if (response.status === 200) {
                const script = document.createElement('script');
                script.textContent = response.responseText;
                document.documentElement.appendChild(script);
            }
        }
    });
})();
