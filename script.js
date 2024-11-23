document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "💻 The first computer programmer was Ada Lovelace in the 1800s.",
        "🐍 Python is named after Monty Python, not the snake.",
        "👾 The first computer virus was created in 1983.",
        "🚀 The first 1GB hard drive was announced in 1980, weighing over 500 pounds.",
        "🖥️ The first website is still online at info.cern.ch.",
        "🔧 There are over 700 programming languages.",
        "🌐 The first emoticon was used in 1982.",
        "📱 More than 5 billion apps are downloaded each month.",
        "🕹️ The first video game was created in 1958.",
        "💡 The term 'bug' was coined after a real bug was found in a computer."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    document.getElementById('factDisplay').textContent = randomFact;
});

document.getElementById('copyFact').addEventListener('click', function() {
    const factText = document.getElementById('factDisplay').textContent;
    navigator.clipboard.writeText(factText).then(() => {
        alert('Fact copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
