document.getElementById("fetch-users").addEventListener("click", function() {
    fetch("https://your-backend.com/api/users")
        .then(response => response.json())
        .then(data => {
            let userList = document.getElementById("user-list");
            userList.innerHTML = "";
            data.forEach(user => {
                let li = document.createElement("li");
                li.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(li);
            });
        });
});
