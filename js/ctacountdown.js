function startCtaTimer(duration, countdown) {
    var ctaTimer = duration, ctaMinutes, ctaSeconds;
    setInterval(function () {
        ctaMinutes = parseInt(ctaTimer / 60, 10);
        ctaMinutes = ctaMinutes < 10 ? "0" + ctaMinutes : ctaMinutes;

        ctaSeconds = parseInt(ctaTimer % 60, 10);
        ctaSeconds = ctaSeconds < 10 ? "0" + ctaSeconds : ctaSeconds;

        countdown.textContent = ctaMinutes + ":" + ctaSeconds;

        if (--ctaTimer < 0) {
            ctaTimer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var countMinutes = 60 * 34,
    countdown = document.querySelector('#cta-time');
    startCtaTimer(countMinutes, countdown);
};