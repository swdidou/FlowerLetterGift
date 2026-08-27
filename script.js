const terminal = document.getElementById("terminal");

const lines = [
    {
        text: "> INITIALIZING SYSTEM...",
        delay: 1000
    },

    {
        text: "> Connecting to remote server...",
        delay: 2000
    },

    {
        text: "> Connection established.",
        delay: 500
    },

    {
        text: "",
        delay: 700
    },

    {
        text: "> Scanning network...",
        delay: 2000
    },

    {
        type: "progress",
        delay: 500
    },

    {
        text: "",
        delay: 700
    },

    {
        text: "> Searching for target...",
        delay: 200
    },

    {
        text: "> Target detected.",
        delay: 500
    },

    {
        text: "",
        delay: 700
    },

    {
        text: "> Analyzing device...",
        delay: 1500
    },

    {
        text: "> Access level: User",
        delay: 1200
    },

    {
        text: "",
        delay: 700
    },

    {
        text: "> Decrypting files...",
        delay: 1000
    },

    {
        type: "progress",
        delay: 500
    },

    {
        text: "",
        delay: 300
    },

    {
        text: "> ACCESS GRANTED",
        delay: 500,
        className: "access"
    },

    {
        text: "",
        delay: 800
    },

    {
        text: "TARGET IDENTIFIED",
        delay: 1000
    },

    {
        text: "",
        delay: 500
    },

    {
        text: "Name: SAM WENG Chloé",
        delay: 700
    },

    {
        text: "Location: 4HM9+2VH Tananarive, Madagascar",
        delay: 700
    },

    {
        text: "Device: 192.168.1.10",
        delay: 1200
    },

    {
        text: "",
        delay: 800
    },

    {
        text: "> Analyzing desktop...",
        delay: 2000
    },

    {
        text: "> Detecting operating system...",
        delay: 1500
    },

    {
        text: "> Analyzing installed applications...",
        delay: 1500
    },

    {
        text: "> Analyzing files...",
        delay: 1500
    },

    {
        text: "> Scanning documents...",
        delay: 1000
    },

    {
        text: "> Analyzing downloads...",
        delay: 1500
    },

    {
        text: "> Analyzing messages...",
        delay: 1500
    },

    {
        text: "> Scanning conversation history...",
        delay: 1200
    },

    {
        text: "> Analyzing photos...",
        delay: 1500
    },

    {
        text: "> Indexing photo library...",
        delay: 1200
    },

    {
        text: "> Analyzing browser history...",
        delay: 1800
    },

    {
        text: "> Checking security settings...",
        delay: 1500
    },

    {
        text: "> Searching for sensitive data...",
        delay: 2000
    },

    {
        text: "",
        delay: 700
    },

    {
        text: "> Analysis complete.",
        delay: 2000
    },

    {
        text: "",
        delay: 800
    },

    {
        text: "Results:",
        delay: 1000
    },

    {
        text: "",
        delay: 500
    },

    {
        text: "✓ Desktop identified",
        delay: 600
    },

    {
        text: "✓ Files indexed",
        delay: 600
    },

    {
        text: "✓ Messages analyzed",
        delay: 600
    },

    {
        text: "✓ Photos indexed",
        delay: 600
    },

    {
        text: "✓ Browser activity analyzed",
        delay: 600
    },

    {
        text: "✓ Security check completed",
        delay: 600
    },

    {
        text: "✓ Target identified",
        delay: 1500
    },

    {
        text: "",
        delay: 1000
    },

    {
        text: "!! WARNING !!",
        delay: 1000,
        className: "warning"
    },

    {
        text: "",
        delay: 500
    },

    {
        text: "Unauthorized access detected.",
        delay: 800
    },

    {
        text: "",
        delay: 500
    },

    {
        text: "Initiating emergency shutdown...",
        delay: 1000
    },

    {
    text: "5",
    delay: 2500,
    className: "countdown"
    },
    
    {
    text: "4",
    delay: 2000,
    className: "countdown"
    },
    
    {
    text: "3",
    delay: 1500,
    className: "countdown"
    },

    {
    text: "2",
    delay: 1000,
    className: "countdown"
    },
    
    {
    text: "1",
    delay: 800,
    className: "countdown"
    },

    {
        text: "",
        delay: 1500
    },

    {
        text: "...",
        delay: 1500
    },

    {
        text: "",
        delay: 800
    },

    {
        text: "UPLOAD DATA COMPLETED",
        delay: 1500
    },

    {
        text: "",
        delay: 800
    },

    {
        text: "I'm JOKING !! You weren't hacked.",
        delay: 1500
    },

    {
        text: "I just wanted to check if it works proprely. BTW scroll pour voir le bouton",
        delay: 2000
    }
];

function addLine(text, className = "") {
    const line = document.createElement("p");

    line.textContent = text;

    if (className !== "") {
        line.classList.add(className);
    }

    terminal.appendChild(line);

    terminal.scrollIntoView({
        behavior: "smooth",
        block: "end"
    });

    return line;
}


let currentLine = 0;

function showNextLine() {
    if (currentLine >= lines.length) {
    showContinueButton();
    return;
    }

    const current = lines[currentLine];

    if (current.type === "progress") {
        progressBar(current.delay).then(() => {
            currentLine++;
            showNextLine();
        });

        return;
    }

    addLine(current.text, current.className);

    currentLine++;

    setTimeout(showNextLine, current.delay);
}

function showContinueButton() {
    const button = document.createElement("button");

    button.textContent = "CLICK HERE TO CONTINUE";

    button.classList.add("continue-button");

    button.addEventListener("click", () => {
        window.open("message.html", "_blank");
    });

    terminal.appendChild(button);
}

function progressBar(duration) {
    return new Promise((resolve) => {
        const line = document.createElement("p");

        terminal.appendChild(line);

        let progress = 0;

        const interval = setInterval(() => {
            progress += 5;

            const filled = Math.round(progress / 5);
            const empty = 20 - filled;

            const bar =
                "█".repeat(filled) +
                "░".repeat(empty);

            line.textContent = `> [${bar}] ${progress}%`;

            if (progress >= 100) {
                clearInterval(interval);

                setTimeout(() => {
                    resolve();
                }, duration);
            }
        }, 100);
    });
}

showNextLine();
