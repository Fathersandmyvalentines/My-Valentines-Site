let noClicks = 0;
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

noBtn.addEventListener("click", () => {
    noClicks++;

    if (noClicks === 1) {
        yesBtn.style.transform = "scale(2)";
        noBtn.innerText = "Pls Be My Valentine";
    } else if (noClicks === 2) {
        yesBtn.style.transform = "scale(4)";
        noBtn.innerText = "I'm literally gonna cry 😭";
    } else if (noClicks === 3) {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.fontSize = "3rem";
        yesBtn.innerText = "PLSSS";
        noBtn.style.display = "none";
    }
});