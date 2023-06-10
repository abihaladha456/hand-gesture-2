prediction_1="";
prediction_2="";
Webcam.set({
    width:350 ,
    height:300 ,
    image_format:"jpeg" ,
    jpeg_quality:100
});


camera=document.getElementById("camera");
Webcam.attach("#camera");
function Takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+ data_uri +'"/ >';

    })
}




function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The First Prediction Is   " + prediction_1;
    speakdata2="And The Second Prediction Is  " + prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterThis);
    
}