const API_URL = "http://localhost:5000";

document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        await fetch(API_URL + "/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        document.getElementById("responseMessage").innerText = "Message Sent!";
    } catch {
        document.getElementById("responseMessage").innerText = "Error!";
    }
});

// GET (fetch messages)
async function getMessages() {
    const res = await fetch(API_URL + "/messages");
    const data = await res.json();
    console.log(data);
}

// DELETE
async function deleteMessage(id) {
    await fetch(API_URL + "/messages/" + id, {
        method: "DELETE"
    });
}

// PUT (update)
async function updateMessage(id) {
    await fetch(API_URL + "/messages/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Updated message" })
    });
}