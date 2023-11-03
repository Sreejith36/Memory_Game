const mycards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.toggle('flip');
    this.classList.add('flip');

    if(hasFlippedCard === false){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();

}

function checkForMatch(){
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    setTimeout(
        () => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        }, 1500
    )
}

mycards.forEach(card => card.addEventListener('click', flipCard));