const context = cast.framework.CastReceiverContext.getInstance();
let playerElement = document.getElementsByTagName("cast-media-player")[0];
playerElement.style.setProperty('--splash-image', 'url("logo.png")');

context.start();
