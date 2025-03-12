document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = { name, email, password };
    
    fetch("https://whatsapp-contact-gain-backend.onrender.com/api/signup", {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert("Signup successful! Check your email for verification.");
            window.location.href = "login.html";
        } else {
            alert("Error: " + data.message);
        }
    });
});
