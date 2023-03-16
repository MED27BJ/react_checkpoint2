var card = [
  {
    valeur: 1,
    // image: "./images/card1.png",
  },
  {
    valeur: 2,
    // image: "./images/card2.png",
  },
  {
    valeur: 4,
    // image: "./images/card4.png",
  },
  {
    valeur: 7,
    // image: "./images/card7.png",
  },
];
var carta = {
  valeur:3,
  // image: "./images/card3.png",
};


let carta1= document.querySelector(".card");
  const imageCont2 = document.createElement("img");
  imageCont2.src ="./images/card"+carta.valeur+".png";
  imageCont2.alt = carta.valeur;
  imageCont2.className='card '+carta.valeur
  carta1.appendChild(imageCont2);


var inserCard = document.querySelectorAll(".insert");

card.map((cart) => {
  var hand = document.querySelector(".hand");
  const imageCont = document.createElement("img");
  imageCont.src = "./images/card"+cart.valeur+".png";;
  imageCont.alt = cart.valeur;
  imageCont.className='card '+cart.valeur
  hand.appendChild(imageCont);
});

inserCard[0].addEventListener("click", function () {
  
  let x = document.querySelector(".hand");
  const imageCont1 = document.createElement("img");
  imageCont1.src = "./images/card"+carta.valeur+".png";;
  imageCont1.alt = carta.valeur;
  imageCont1.className='card '+carta.valeur
  x.appendChild(imageCont1);
  this.remove();
});
console.log(card[card.length-1].valeur);
var inscard = document.querySelectorAll(".ins");
inscard[0].addEventListener("click", function ins(){
let i = 0;
if(carta.valeur < (card[card.length-1].valeur)){
while ((card[i].valeur <= carta.valeur)) {
  i++;
}

pos = i;



for (let j =card.length; j>pos;j--) {
  card[j] = card[j - 1];
}
card[pos] = carta;
}else{
card[card.length]=carta;
}
this.remove();
card.map((cart) => {
  var handa = document.querySelector(".handa");
  const imageCont = document.createElement("img");
  imageCont.src = "./images/card"+cart.valeur+".png";;
  imageCont.alt = cart.valeur;
  imageCont.className='card '+cart.valeur

  handa.appendChild(imageCont);
});


}
)
console.log(card);

