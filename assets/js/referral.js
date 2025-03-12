document.addEventListener("DOMContentLoaded", function() {
    fetch("https://your-backend.com/api/referrals")
        .then(response => response.json())
        .then(data => {
            document.getElementById("referral-link").value = data.referralLink;
            let leaderboard = document.getElementById("leaderboard");
            data.leaderboard.forEach(user => {
                let li = document.createElement("li");
                li.textContent = `${user.name} - ${user.referrals} referrals`;
                leaderboard.appendChild(li);
            });
        });
});

function copyLink() {
    let link = document.getElementById("referral-link");
    link.select();
    document.execCommand("copy");
    alert("Referral link copied!");
}
