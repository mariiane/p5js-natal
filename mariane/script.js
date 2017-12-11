/**
 * p5js boilerplate
 * 
 * 
 */
var fundo;
var floco1img;
var floco2img;
var floco3img;
var floco4img;
var boneco;
var estrela;
var som;
var arvore;
var cairEstrela;

function preload() {
	fundo = loadImage("paisagem.jpg"); 
	floco1img = loadImage("floco1.png");
	floco2img = loadImage("floco2.png");
	floco3img = loadImage("floco3.png");
	floco4img = loadImage("floco4.png");
	boneco = loadImage("snowman.png");
	estrela = loadImage("star.png");
	som = loadSound("musica.mp3");
	arvore = loadImage("arvorenatal.png");

}

// chamada no inicio do programa
function setup() {
	som.play();
	createCanvas(1270,730);
	som.setVolume(1.0);
	som.loop();
	estrelaPos = createVector(900, 0);
	cair = createVector(0, 0);
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(900, 400);
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(fundo);
	
	image(boneco, 50,  180, 150, 150);

	image(floco1img, 25, cair.y, 50, 50);
	image(floco2img, 125, cair.y, 50, 50);
	image(floco3img, 225, cair.y, 50, 50);
	image(floco4img, 325, cair.y, 50, 50);
	image(floco1img, 425, cair.y, 50, 50);
	image(floco2img, 525, cair.y, 50, 50);
	image(floco3img, 650, cair.y, 50, 50);
	image(floco4img, 725, cair.y, 50, 50);
	image(floco1img, 825, cair.y, 50, 50);
	image(floco2img, 925, cair.y, 50, 50);

	cair.y++;

	if(cair.y >= 400){
		cair.y = -50
	}

	image(estrela, estrelaPos.x, estrelaPos.y, 50, 50);
	image(arvore, 740, 240, 150, 150);

	if(cairEstrela == true){

		estrelaPos.x -=3;
		estrelaPos.y +=2;
	}
}

function mousePressed(){
	cairEstrela = true
}


