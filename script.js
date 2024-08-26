var theButton = document.getElementById('player');

window.addEventListener('load', function() {
    document.querySelector('.loader-wrapper').style.display = 'none';
});

theButton.addEventListener('click', function() {
document.querySelector('.player').style.display = 'none';
'use strict';
const video = document.getElementById('video') ;
const errorMsgElement = document.getElementById('span#ErrorMsg');

const constraints = {
    audio: false,
    video:{
        width: 1280, height: 720
    }
};
async function init() {
    try{
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    }
    catch(e){
        errorMsgElement,innerHTML = 'navigator.getUserMedia.error:${e.toString()}';
    }
}

function handleSuccess(stream){
    window.stream = stream;
    video.srcObject = stream;
}

init();

});