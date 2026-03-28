document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const text = await res.text();
        alert("SERVER RESPONSE:\n" + text); // 👈 IMPORTANT
    } catch (err) {
        alert("Error sending message ❌");
        console.error(err);
    }
});