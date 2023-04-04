/* Criar uma matriz notas e add valores no indice.
// variavel global 
obs. variavel e onde guarda informações.*/
var notas = [35,38,40,45];

function setup() 
{
  createCanvas(400,400);
  // criar duas matriz uma nota e outra media
  // primeira vai somar todas as notas
  // segunda vai da media fazendo leitura do tamanho da matriz
  var soma = notas[0] + notas [1] + notas [2] + notas [3];
  var media= soma/ notas.length;
  // mandar imprimir na tela a media tirada
  console.log(media);
}

function draw() 
{
background(51);

}

