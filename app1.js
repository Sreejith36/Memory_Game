const mycards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){

    if(lockBoard === true){
        return;
    }

    if(this === firstCard){
        return;
    }

    // this.classList.toggle('flip');
    this.classList.add('flip');

    if(hasFlippedCard === false){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();

}

function checkForMatch(){
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        disableCards();
        console.log(firstCard.dataset.framework);
        return;
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(
        () => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500 )
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];

    [firstCard, secondCard] = [null, null];
    console.log(hasFlippedCard);
}

(function shuffle(){
mycards.forEach( (card) => {

    let randomNum = Math.floor(Math.random() * 12);
    card.style.order = randomNum;
    console.log(randomNum);

});
})()


mycards.forEach(card => card.addEventListener('click', flipCard));

function resetGame(){
    location.reload();
}