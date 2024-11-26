const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedPairs = 0;

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    
    if (firstCard.dataset.card === secondCard.dataset.card) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedPairs++;

        if (matchedPairs === cards.length / 2) {
            alert('Você ganhou!');
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
        }, 1000);
    }
    
    flippedCards = [];
}

function shuffleCards() {
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * cards.length);
    });
}

cards.forEach(card => card.addEventListener('click', flipCard));

shuffleCards();