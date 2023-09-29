//criando as variáveis
var s1, s2, s3, s4, s5, s6, s7;
//cria a matriz que terá todas as músicas
var sons = [];
//cria sete variáveis para as sete imagens
var img1, img2, img3, img4, img5, img6, img7;
//cria a matriz de imagens
var imgs = [];
//cria uma matriz com os nomes das músicas
var nomes = ['Kirby Dream Land Theme Song', 'Waluigi Pinball','Float Islands','Floral Fields',
 'Friendly Fields', 'Re-Green Greens', "Title Theme - Kirby's Return to Dream Land" ];
//define o índice
var i = 0;
function preload(){
    //carrega todas as músicas
    s1 = loadSound("musica.mpeg");
    s2 = loadSound("mario.mp3");
    s3 = loadSound("float.mp3");
    s4 = loadSound("floral_fields.mp3");
    s5 = loadSound("friendly.mp3");
    s6 = loadSound("greens.mp3");
    s7 = loadSound("title_theme.mp3");

    img1 = loadImage("i1.jpg");
    img2 = loadImage("i2.png");
    img3 = loadImage("i3.jpg");
    img4 = loadImage("i4.jpg");
    img5 = loadImage("i5.jpg");
    img6 = loadImage("i6.jpg");
    img7 = loadImage("i7.jpg");
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(windowWidth/2 - 320, 240);
    background("white");

    sons = [s1, s2, s3, s4, s5, s7];
    imgs = [img1, img2, img3, img4, img5, img6, img7];
}
function draw(){
    //coloca a imagem
    image(imgs[i], 0, 0, width, height);

    document.getElementById("nome").innerHTML = nomes[i];
}
function pausar(){
    //checa se o som está tocando
    if(sons[i].isPlaying()){
        //troca o emoji
        document.getElementById("pausar").innerHTML = "&#9209;";
        //para a música
        sons[i].pause();
    }else{
        //troca o emoji
        document.getElementById("pausar").innerHTML = "&#9208;";
        //define o volume
        sons[i].setVolume(0.2);
        //tocar a música
        sons[i].play();
    }
}
function proximo(){
    //Parar a música anterior
    sons[i].stop();
    //aumenta o índice
    i++;
    //se i tem o valor da última música
    if(i==sons.length){
        //volta para a primeira música
        i = 0;

    }
    //protege os seus ouvidos
    sons[i].setVolume(0.2);
    //toca música
    sons[i].play();

}
function voltar(){
    //Para a música anterior
    sons[i].stop();
    //diminui o valor do índice
    i--;
    //se i tem o valor da primeira 
    if(i < 0){
        i = sons.length - 1;
    }
    //protege os seus ouvidos
    sons[i].setVolume(0.2);
    //toca música
    sons[i].play();

}