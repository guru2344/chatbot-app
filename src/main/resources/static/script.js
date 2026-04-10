async function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value;
    if (!userText) return;

    addMessage(userText, "user");

    input.value = "";

    const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: userText
    });

    const data = await response.text();

    addMessage(data, "bot");
}

function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");

    const div = document.createElement("div");
    div.classList.add("message", sender);
    div.innerText = text;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}