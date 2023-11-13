let img1, img2, img3, img4;



function iniciar(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = 
    ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9kAMiixj4/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("somDetectado").innerHTML = 'Posso ouvir - ' + results[0].label;
        document.getElementById("precisãoSom").innerHTML = 'Posso ouvir - ' + (results[0].confidence*100).toFixed(2) + '%'
        document.getElementById("somDetectado").style.color = "rgb("+random_number_r, random_number_g, random_number_b+")";
        document.getElementById("precisãoSom").style.color = "rgb("+random_number_r, random_number_g, random_number_b+")";

        img1 = document.getElementById("animal1");
        img2 = document.getElementById("animal2");
        img3 = document.getElementById("animal3");
        img4 = document.getElementById("animal4");

        if(results[0].label == "Gato"){
            img1.src = "gato.gif";
            img2.src = "cachorro.jpg";
            img3.src = "porquinhoDaIndia.jpg";
            img4.src = "passarinho.jpg";
        }else if(results[0].label == "Cachorro"){
            img1.src = "gato.jpg";
            img2.src = "cachorro.gif";
            img3.src = "porquinhoDaIndia.jpg";
            img4.src = "passarinho.jpg";
        }else if(results[0].label == "Porquinho da india"){
            img1.src = "gato.jpg";
            img2.src = "cachorro.jpg";
            img3.src = "porquinhoDaIndia.gif";
            img4.src = "passarinho.jpg";
        }else if(results[0].label == "Passarinho"){
            img1.src = "gato.jpg";
            img2.src = "cachorro.jpg";
            img3.src = "porquinhoDaIndia.jpg";
            img4.src = "passarinho.gif";
        }else{
            img1.src = "gato.jpg";
            img2.src = "cachorro.jpg";
            img3.src = "porquinhoDaIndia.jpg";
            img4.src = "passarinho.jpg";
        }
    }
}