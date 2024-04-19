const messageArea = document.getElementById("message-area");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const joinButton = document.getElementById("join-button");
let username = "";
let currentCategory = "General";

function selectCategory(category) {
    currentCategory = category;
    updateChatStyle();
    console.log(`Catégorie sélectionnée: ${category}`);
}

function updateChatStyle() {
    document.querySelectorAll(".chat").forEach(chat => {
        chat.className = "chat " + currentCategory.toLowerCase();
    });
}

joinButton.addEventListener("click", () => {
    setUsername();
});

function setUsername() {
    const usernameInput = document.getElementById("username").value.trim();
    if (usernameInput !== "") {
        username = usernameInput;
        document.getElementById("username").disabled = true;
        joinButton.disabled = true;
        messageInput.disabled = false;
        sendButton.disabled = false;
    }
}

sendButton.addEventListener("click", () => {
    sendMessage();
});

messageInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) { // Enter key
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
        appendMessage(username, message);
        messageInput.value = "";
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageElement.className = currentCategory.toLowerCase();
    messageArea.appendChild(messageElement);
    messageArea.scrollTop = messageArea.scrollHeight; // Scroll to bottom
}
// Inscription
function register() {
    const username = document.getElementById("register-username").value.trim();
    const password = document.getElementById("register-password").value.trim();

    if (username && password) {
        localStorage.setItem(username, password);
        alert("Inscription réussie !");
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

// Connexion
function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const storedPassword = localStorage.getItem(username);

    if (password === storedPassword) {
        alert("Connexion réussie !");
        // Redirection vers la page du chat
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
}