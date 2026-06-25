(function () {
    var canUseServiceWorker = "serviceWorker" in navigator &&
        (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1");

    if (!canUseServiceWorker) {
        return;
    }

    window.addEventListener("load", function () {
        navigator.serviceWorker.register("sw.js").catch(function () {
            // 静默失败，避免影响普通浏览。
        });
    });
})();
