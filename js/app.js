var navigator = window.navigator;
var Context = window.AudioContext || window.webkitAudioContext;
var context = new Context();

// audio
var mediaStream;
var rec;

// video
var videoMediaStream;
var video;

navigator.getUserMedia = (
  navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
);

function record() {
  navigator.getUserMedia({audio: true}, function(localMediaStream){
    mediaStream = localMediaStream;
    var mediaStreamSource = context.createMediaStreamSource(localMediaStream);
    rec = new Recorder(mediaStreamSource, {
/*       workerPath: 'C:/Roopak/Projects/GitHub/web-audio-example-master/bower_components/Recorderjs/recorderWorker.js' */
      workerPath: 'bower_components/Recorderjs/recorderWorker.js'
    });

    rec.record();
  }, function(err){
    console.log('Not supported');
  });
}

function stop() {
  mediaStream.stop();
  rec.stop();

  rec.exportWAV(function(e){
    rec.clear();
    Recorder.forceDownload(e, "test.wav");
  });
}

function recordVideo() {
  navigator.getUserMedia({video: true, audio: true}, function(localMediaStream){
    videoMediaStream = localMediaStream;
    var Context = window.AudioContext || window.webkitAudioContext;
    var context = new Context();
    var mediaStreamSource = context.createMediaStreamSource(localMediaStream);

    video = document.querySelector('video');
    video.src = URL.createObjectURL(localMediaStream);
    video.play();
  }, function(err){
    console.log('Not supported');
  });
}


function stopVideo() {
  video.pause();
  videoMediaStream.stop();
  
    videoMediaStream.exportmp4(function(e){
    videoMediaStream.clear();
    Recorder.forceDownload(e, "test.mp4");
  });
  
}

function toTele(result){
	var elementValue = result;
	console.log(elementValue);
/* 	window.location.href ="index.html"; */
	window.open("index.html", "_blank");
	document.getElementById("receptor").innerHTML = document.getElementById("byte_content").innerHTML;
var locate = window.location
document.joe.burns.value = locate

var text = document.joe.burns.value

function delineate(str)
{
theleft = str.indexOf("=") + 1;
theright = str.lastIndexOf("&");
return(str.substring(theleft, theright));
}
document.write("First Name is " +delineate(text));

	
	
	
}
