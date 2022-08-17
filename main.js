function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9EcNWhjLm/.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
    console.log(modelReady);
}
function gotResults(error,results)
{
    console.log('Got Result');
    if (error)
    {
        console.error(error);

    } 
 else 
{
    console.log(results);
    random_number_r= Math.floor(Math.random()*255)+1;
    random_number_g= Math.floor(Math.random()*255)+1;
    random_number_b= Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById('bird');
    img1=document.getElementById('catt');
    img2=document.getElementById('cow');
    img3=document.getElementById('dog');

    if(results[0].label=="Barking")
    {
        img.src='dog.gif';
        img1.src='catt.png';
        img2.src='cow.png';
        img3.src='bird.png';
    }
    else if(results[0].label=="Meowing")
    {
        img.src='dog.png';
        img1.src='catt.gif';
        img2.src='cow.png';
        img3.src='bird.png';
    }
    else if(results[0].label=="Mooing")
    {
        img.src='dog.png';
        img1.src='catt.png';
        img2.src='cow.gif';
        img3.src='bird.png';
    }
    else
    {
        img.src='dog.png';
        img1.src='catt.png';
        img2.src='cow.png';
        img3.src='bird.gif';
    }

}
}