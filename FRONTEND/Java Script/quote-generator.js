const quotes = [
    { 
        text: "A book must be the axe for the frozen sea within us.", 
        author: "Franz Kafka",
        image: "../images/authors/franz-kafka.jpg"
    },
    { 
        text: "I write as if to save somebody’s life. Probably my own.", 
        author: "Clarice Lispector",
        image: "../Images/authors/clarice-lispector.jpg"


    },
    { 
        text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.", 
        author: "Fyodor Dostoevsky",
        image: "../images/authors/fyodordostoevsky.jpg"
    },
    { 
        text: "There is no greater agony than bearing an untold story inside you.", 
        author: "Maya Angelou",
        image: "../images/authors/maya-angelou.avif"
    },
    { 
        text: "They might not need me; but they might. I'll let my head be just in sight; a smile as small as mine might be precisely their necessity.", 
        author: "Emily Dickinson",
        image: "../images/authors/emily.avif"
    },
    { 
        text: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.",
        author: "Sylvia Plath",
        image: "../images/authors/sylvia-plath.webp"
    },
    { 
        text: "To learn to read is to light a fire; every syllable that is spelled out is a spark.", 
        author: "Victor Hugo",
        image: "../images/authors/victor_hugo.jpg"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("q-text").innerText = `"${randomQuote.text}"`;
    document.getElementById("a-name").innerText = `- ${randomQuote.author}`;
    document.getElementById("a-img").src = randomQuote.image;
}
