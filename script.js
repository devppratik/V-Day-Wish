(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
  "Are you sure?",
  "Really sure??",
  "Confirm toh?",
  "Dekh lo, confirm pura?",
  "Soch lo ek baar",
  "Dukhi kr dogi, Haan bol do ab",
  "Dukhi ho jaunga pura 😔🥺 ...",
  "Bohot bohot dukhi ho jaunga 😔🥺🥺",
  "Thik hai phir, aur nhi puchunga 👿",
  "Mazak kr rha tha, say yes please! 😘❤️",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

const text = [
    "Roses are red, violets are blue",
    "My heart is happiest when I’m with you.",
    "So on this day, my love, divine,",
    "Will you forever be my Valentine? 💕"
];

function displayText() {
    const container = document.getElementById("text-container");

    text.forEach((line, lineIndex) => {
    setTimeout(() => {
        const lineElement = document.createElement("span");
        lineElement.classList.add("line");
        container.appendChild(lineElement);

        const words = line.split(" ");
        words.forEach((word, wordIndex) => {
        setTimeout(() => {
            const wordElement = document.createElement("span");
            wordElement.classList.add("word");
            wordElement.innerText = word;
            lineElement.appendChild(wordElement);

            wordElement.style.opacity = "1";
            wordElement.style.transition = "opacity 0.3s";
        }, wordIndex * 300);
        });

        lineElement.style.opacity = "1";
        lineElement.style.transition = "opacity 0.5s";
    }, lineIndex * 1500);
    });
}

displayText();