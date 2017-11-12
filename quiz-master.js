currentAnswer = null;
score = 0;

function loadFact() {
    currentfactPosition = Math.floor((Math.random() * facts.length));
    currentFact = facts[currentfactPosition];

    div = document.getElementById('fact-container');
    div.innerHTML = currentFact.fact;

    currentAnswer = currentFact.answer;
    facts.splice(currentfactPosition, 1);
}

function submitAnswer(userAnswer) {
    if(userAnswer.toLowerCase() == currentAnswer.toLowerCase()) {
        score++;
        document.getElementById('score').innerHTML = score;
    }
    loadFact();
}

window.onload = loadFact;
