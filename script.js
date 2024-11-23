document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "Honey never spoils.",
        "A single strand of Spaghetti is called a 'Spaghetto'.",
        "Octopuses have three hearts.",
        "Bananas are berries, but strawberries aren't.",
        "A group of flamingos is called a 'flamboyance'."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    document.getElementById('factDisplay').textContent = randomFact;
});
