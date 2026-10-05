const facts = [
    "The Moon is about 384,400 km away from Earth.",
    "Mars is known as the Red Planet.",
    "Jupiter is the largest planet in our solar system.",
    "A day on Venus is longer than a year on Venus."
];

function showFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("spaceFact").innerText = randomFact;
}
