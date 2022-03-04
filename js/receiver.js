const context = cast.framework.CastReceiverContext.getInstance();
let playerElement = document.getElementsByTagName("cast-media-player")[0];
playerElement.style.setProperty('--splash-image', 'url("https://github.com/sergiogc92/chromecast-receiver/blob/main/logo.png")');

context.start();
