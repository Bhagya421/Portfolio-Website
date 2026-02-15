const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newMessage = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    // simple frontend validation
    if (newMessage.name ==="" || newMessage.email === "" || newMessage.message === "") {
        alert("Please fill all fields correctly");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/save-msg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        });
        console.log("Server response:", response);
        alert(response.message);
        form.reset();


    } catch (err) {
        alert("Error sending message: " + err.message);
        console.error(err);
    }
});
