prediction1="";

prediction2="",



Webcam.set({
    height:350,
    width:350,
    image_format:'png',
    png_quality:900

});

camera_1=document.getElementById("camera");
console.log(camera);
Webcam.attach(camera_1)

 function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
});
}

console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fjVnMY4Il/model.json',modelLoaded);

function modelLoaded(){
console.log("modelLoaded")

}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="the first prediction is "+prediction1;
    speak_data2="the second prediction is "+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterthis);
}

   
function check(){
img=document.getElementById("captured_image");
classifier.classify(img,gotresult)
}

function gotresult(error,result){

    if(error){
        console.log(error)
    }

    else{
        console.log(result)

        document.getElementById("result_emotion_name").innerHTML=result[0].label;
        document.getElementById("result_emotion_name_2").innerHTML=result[1].label;

        if(result[0].label=="sad"){
            document.getElementById("update_emoji").innerHTML="&#128532";
            
        }
        if(result[0].label=="angry"){
            document.getElementById("update_emoji").innerHTML="&#128548";

            
        }
        if(result[0].label=="naughty"){
            document.getElementById("update_emoji").innerHTML="&#128548";
            
        }




        if(result[1].label=="sad"){
            document.getElementById("update_emoji_2").innerHTML="&#128532";
            
        }

        if(result[1].label=="sad"){
            document.getElementById("update_emoji_2").innerHTML="&#128532";
            
        }if(result[1].label=="sad"){
            document.getElementById("update_emoji_2").innerHTML="&#128532";
            
        }
    }

};

