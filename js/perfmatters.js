function logCRP() {
    var n = window.performance.timing,
        t = n.domContentLoadedEventStart - n.domLoading,
        e = n.domComplete - n.domLoading,
        o = document.getElementById("crp-stats");
    o.textContent = "DCL: " + t + "ms, onload: " + e + "ms"
}! function(n, t) {
    n.GoogleAnalyticsObject = t, n[t] = n[t] || function() {
        (n[t].q = n[t].q || []).push(arguments)
    }, n[t].l = 1 * new Date
}(window, "ga"), ga("create", "UA-58406702-1"), ga("send", "pageview"), window.addEventListener("load", function() {
    logCRP()
});