function setOverlay(type, id1, name1, image1, id2, name2, image2, Round) {
    document.getElementById("TextBox").style.opacity = "0";
    if (type == 1) {
        fetch(`https://new.scoresaber.com/api/player/${id1}/basic`)
            .then(response => response.json())
            .then(data => {
                PlayerImages[0] = data.playerInfo.avatar === "/images/oculus.png"
                    ? "https://new.scoresaber.com/api/static/avatars/oculus.png"
                    : `https://new.scoresaber.com/api/static/avatars/${id1}.jpg`;

                PlayerIDs[0] = id1;

                const player1Container = document.getElementById("Player1Container");
                player1Container.style.opacity = 1;
                player1Container.querySelector("#Player1Image").src = PlayerImages[0];
                player1Container.querySelector("#Player1Name").innerText = name1;
            });

        fetch(`https://new.scoresaber.com/api/player/${id2}/basic`)
            .then(response => response.json())
            .then(data => {
                PlayerImages[1] = data.playerInfo.avatar === "/images/oculus.png"
                    ? "https://new.scoresaber.com/api/static/avatars/oculus.png"
                    : `https://new.scoresaber.com/api/static/avatars/${id2}.jpg`;

                PlayerIDs[1] = id2;

                const player2Container = document.getElementById("Player2Container");
                player2Container.style.opacity = 1;
                player2Container.querySelector("#Player2Image").src = PlayerImages[1];
                player2Container.querySelector("#Player2Name").innerText = name2;
            });

    } else if (type == 2) {
        [TeamIDs[0], TeamIDs[1]] = [id1, id2];
        [TeamImages[0], TeamImages[1]] = [image1, image2];
        const player1Container = document.getElementById("Player1Container");
        player1Container.querySelector("#Player1Image").src = image1;
        player1Container.querySelector("#Player1Name").innerText = name1;

        const player2Container = document.getElementById("Player2Container");
        player2Container.querySelector("#Player2Image").src = image2;
        player2Container.querySelector("#Player2Name").innerText = name2;
    }
    
    setTimeout(() => {
        document.getElementById("PlayerContainers").style.opacity = 1;
        document.getElementById("RoundText").outerHTML = `<div id="RoundText" class="RoundText">${FormatText(Round)}</div>`;
        document.getElementById("TextBox").style.opacity = "1";
    }, 600);
}
