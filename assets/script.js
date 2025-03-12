document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    // Copy Referral Link
    const copyBtn = document.getElementById("copyLink");
    if (copyBtn) {
        copyBtn.addEventListener("click", function () {
            const referralLink = document.getElementById("referralLink").innerText;
            navigator.clipboard.writeText(referralLink).then(() => {
                alert("Referral link copied!");
            });
        });
    }
});
