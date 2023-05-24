//Inspirado en la obra de Hilma Af Klint
//"The Ten Largest"

//FUNCIONES

let gira = 0;
let r, g, b;
let velocidad = 10;
let colorUno = 0;
let colorDos = 180;
let rueda;
let easing = 0.10;
let destinoX=0;
let destinoY=0;

function setup() {
  
  createCanvas(890, 1100);
  background(255);



}

function draw() {
  console.log("x: " + mouseX + " y:" + mouseY);

  //FONDO

  push();
  noStroke();
  fill(colorUno + rueda, 196, 237); //celeste pasteloso
  rect(20, 20, 850, 1060);
  pop();

  //CIRCULOS INFERIORES SUPERPUESTOS

  push();
  noStroke();
  fill(252, 127, 3); //naranja
  ellipse(245, 858, 445, 445);
  fill(29, 34, 117); //azul oscuro
  ellipse(645, 858, 445, 445);
  pop();
  //coso del medio

  push();
  strokeWeight(2);
  stroke(159, 204, 75); //verde
  fill(159, 204, 75); //verde
  bezier(445, 760, 472, 799, 469, 900, 445, 953); //verde
  bezier(445, 760, 410, 799, 413, 900, 445, 953); //verde
  pop();

  //CIRCULO CHIQUITO AMARILLO DEBAJO DEL CIRCULO GRANDE FLOREADO

  //1
  //let circleX = 320;
  //let circleY = 500;
  
  push();
  stroke(255); //blanco
  strokeWeight(3);
  fill(255, 209, 94); //amarillo quack
  ellipse(mouseX, mouseY, 130, 130);
  pop();

  //FLOR 4 PETALOS

  //amarillo
  push();
  translate(724, 195);
  noStroke();
  fill(255, 209, 94);
  for (let i = 0; i < 4; i++) {
    ellipse(0, 40, 60, 80);
    rotate(PI / 2);
  }
  pop();

  //celeste
  push();
  translate(724, 195);
  noStroke();
  fill(180, 196, 237);
  for (let i = 0; i < 4; i++) {
    ellipse(0, 30, 40, 60);
    rotate(PI / 2);
  }
  pop();

  //rosa
  push();
  translate(724, 195);
  noStroke();
  fill(247, 173, 185);
  for (let i = 0; i < 4; i++) {
    ellipse(0, 20, 20, 40);
    rotate(PI / 2);
  }
  pop();

  //rosa muy claro
  push();
  translate(724, 195);
  noStroke();
  fill(252, 235, 232);
  for (let i = 0; i < 4; i++) {
    ellipse(0, 10, 5, 20);
    rotate(PI / 2);
  }
  pop();

  //ELIPSES GIRATONTAS
  //desde abajo para arriba

  //1 CIRCULO ROSA FUERTE

  push(); //start
  stroke(255); //blanco
  strokeWeight(3);
  fill(222, 111, 128); //rosa fuerte
  translate(width / 2.5, height / 2);
  rotate(PI / 9.0);
  ellipse(76, -76, 210, 260);
  pop(); //end

  //CIRCULO SOLO CONTORNO BALNCO

  push(); //start
  strokeWeight(3);
  stroke(255);
  noFill();
  translate(width / 2, height / 2.1);
  rotate(PI / 9.0);
  ellipse(250, -205, 235, 272);
  pop(); //end

  //CIRCULO ROSA CLARO

  push();
  strokeWeight(3);
  stroke(255, 158, 184); //rosa medio
  fill(252, 235, 232); //rosa muy claro
  ellipse(618, 515, 190, 238);
  pop();

  //coso dentro del circulo rosa claro

  //amarillo
  push();
  translate(168, -400);
  noStroke();
  fill(255, 209, 94);
  bezier(448, 916, 410, 860, 423, 819, 448, 811);
  bezier(448, 916, 485, 860, 472, 819, 448, 811);
  bezier(448, 916, 410, 972, 423, 1013, 448, 1020);
  bezier(448, 916, 485, 972, 472, 1013, 448, 1020);
  pop();

  //celeste
  push();
  translate(168, -400);
  noStroke();
  fill(180, 196, 237);
  bezier(448, 916, 418, 871, 428, 838, 448, 832);
  bezier(448, 916, 477, 871, 467, 838, 448, 832);
  bezier(448, 916, 418, 961, 428, 994, 448, 1000);
  bezier(448, 916, 477, 961, 467, 994, 448, 1000);
  pop();

  //rosa
  push();
  translate(168, -400);
  noStroke();
  fill(255, 158, 184);
  bezier(448, 916, 425, 881, 432, 856, 448, 851);
  bezier(448, 916, 470, 881, 463, 856, 448, 851);
  bezier(448, 916, 425, 951, 432, 976, 448, 981);
  bezier(448, 916, 470, 951, 463, 976, 448, 981);
  pop();

  //rosa muy claro
  push();
  translate(168, -400);
  noStroke();
  fill(252, 235, 232);
  bezier(448, 869, 438, 870, 434, 889, 448, 916);
  bezier(448, 869, 457, 870, 462, 889, 448, 916);
  bezier(448, 916, 434, 943, 438, 962, 448, 960);
  bezier(448, 916, 462, 943, 457, 962, 448, 960);
  pop();

  //4 CIRCULO CONTORNO ROSA FUERTE

  push(); //start
  strokeWeight(3);
  stroke(222, 111, 128); //rosa fuerte
  noFill();
  translate(width / 2, height / 2.1);
  rotate(PI / 15);
  ellipse(205, -380, 165, 185);
  pop(); //end

  //5 CIRCULO NARANJA

  push();
  strokeWeight(3);
  stroke(255, 209, 94); //amarillo quack
  fill(227, 99, 45); //naranja fuerte
  ellipse(500, 134, 300, 225);
  pop();

  //FLOR DENTRO DEL CIRCULO NARANJA

  push();
  noStroke();
  translate(500, 134);
  for (let i = 0; i < 7; i++) {
    ellipse(0, 0, 220, 50);
    rotate(PI / 4);
  }
  pop();

  //6 CIRCULO CONTRONO ROSA CLARO

  push();
  strokeWeight(3);
  stroke(247, 173, 185); //rosa medio
  noFill();
  translate(width / 0, height / 0);
  rotate(PI / 2.3);
  ellipse(195, -247, 175, 140);
  pop();

  //CIRCULOS

  //2 CIRCULO PRINCIPAL

  push();
  strokeWeight(3);
  stroke(255); //blanco
  fill(180, 196, 237); //celeste pasteloso
  ellipse(250, 320, 454, 454);
  pop();

  //FLOR PRINCIPAL 1.0

  //1.1
  //contorno flor grande

  push();
  translate(250, 320);
  strokeWeight(6);
  stroke(247, 173, 185); //rosa medio
  fill(247, 173, 185); //rosa medio
  for (let i = 0; i < 20; i++) {
    ellipse(0, 0, 445, 160);
    rotate(PI / 10);
  }
  pop();

  //flor grande

  push();
  translate(250, 320);
  noStroke();
  fill(250, 195, 204); //rosa claro no tanto
  for (let i = 0; i < 20; i++) {
    rotate(frameCount / -160.0);
    ellipse(0, 0, 445, 160);
    rotate(PI / 10);
  }
  pop();

  //1.2 petalos rosa fuerte

  push();
  translate(250, 320);
  noStroke();
  fill(247, 173, 185); //rosa medio
  for (let i = 0; i < 6; i++) {
    rotate(frameCount / -180.0);
    ellipse(0, 0, 415, 140);
    rotate(PI / 3.3);
  }
  pop();

  //1.3 petalos rosa claro

  push();
  translate(250, 320);
  noStroke();
  fill(252, 235, 232); //rosa muy claro
  for (let i = 0; i < 6; i++) {
    rotate(frameCount / -200.0);
    ellipse(0, 0, 295, 120);
    rotate(PI / 3.3);
  }
  pop();

  //1.4 FLOR DEL MEDIO

  //contorno flor chiquita

  push();
  translate(244, 326);
  stroke(255, 158, 184); //rosa medio
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 23, 43);
    rotate(PI / 5);
  }
  pop();

  //flor chiquita

  push();
  translate(244, 326);
  noStroke(); //rosa medio
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 20, 40);
    rotate(PI / 5);
  }
  pop();

  //coso del medio

  push();
  strokeWeight(2);
  stroke(180, 196, 237); //celeste pasteloso
  fill(255, 209, 94); //amarillo quack
  ellipse(244, 326, 20, 20);
  pop();

  //3,4,5,6 CIRCULO ESPIRAL

  push();
  strokeWeight(3);
  stroke(255);
  noFill();
  ellipse(568, 320, 140, 140);
  ellipse(568, 320, 100, 100);
  ellipse(568, 320, 60, 60);
  ellipse(568, 320, 30, 30);
  pop();

  //CIRCULO 7 CON FLOR BLANCA

  push();
  noStroke();
  fill(255, 209, 94); //amarillo quack
  ellipse(823, 420, 88, 88);
  pop();

  //flor chiquita blanca

  push();
  translate(824, 420);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 17, 88);
    rotate(PI / 5);
  }
  pop();

  //coso que esta al costado izq. que parece un clip de papel

  push();
  strokeWeight(3);
  stroke(255, 158, 184); //rosa medio
  fill(255, 158, 184); //rosa medio
  line(60, 540, 60, 640);
  ellipse(30, 540, 60, 70);
  ellipse(30, 640, 60, 70);
  pop();
  noStroke();
  rect(0, 0, 20, 1100);
  
  //ANIMACION CAMBIO DE COLOR
    if (keyIsPressed === true) {
    colorMode(HSB);
    gira += velocidad;
    rueda = (gira) % 360;
    console.log(rueda);
    }
  else {colorMode(RGB)}

  
}
  
