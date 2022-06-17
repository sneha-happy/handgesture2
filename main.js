Webcam.set({
    height:300,
    width:350,
    image_format: 'png',
    png_quality:90
 });
 
 var camera = document.getElementById("camera");
 
 Webcam.attach('#camera');
 
 function takeSnapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
     });
 }
 
 console.log('ml5version ',ml5.version);
 
 classiffier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qHULuDXZy/model.json',model_loaded);
 
 function model_loaded(){
     console.log("model loaded")
 }