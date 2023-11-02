const mycards = document.querySelectorAll('.card');

function flipCard(){
    this.classList.toggle('flip');
}

mycards.forEach(card => card.addEventListener('click', flipCard));