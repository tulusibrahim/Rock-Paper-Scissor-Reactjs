import React from 'react';


let you = ["gunting", "batu", "kertas"];

function kertas() {
    document.getElementById("you").innerHTML = "kertas"
    you = "kertas"
}
function gunting() {
    document.getElementById("you").innerHTML = "gunting"
    you = "gunting"
}
function batu() {
    document.getElementById("you").innerHTML = "batu"
    you = "batu"
}

let scoreyou = 0;
let scorebot = 0;

function yuk() {
    var judgement = document.getElementById("judgement");

    var bot = ["gunting", "batu", "kertas"];
    var outputbot = bot[Math.floor(Math.random() * bot.length)];
    document.getElementById("bot").innerHTML = outputbot;

    let jawaban =
        you === "gunting" && outputbot === "gunting"
            ? "Seri"
            : you === "gunting" && outputbot === "batu"
                ? "Kalah"
                : you === "gunting" && outputbot === "kertas"
                    ? "Menang"
                    : you === "batu" && outputbot === "gunting"
                        ? "Menang"
                        : you === "batu" && outputbot === "batu"
                            ? "Seri"
                            : you === "batu" && outputbot === "kertas"
                                ? "Kalah"
                                : you === "kertas" && outputbot === "gunting"
                                    ? "Kalah"
                                    : you === "kertas" && outputbot === "batu"
                                        ? "Menang"
                                        : you === "kertas" && outputbot === "kertas"
                                            ? "Seri"
                                            : "";
    judgement.innerHTML = jawaban;

    if (jawaban === "Menang") {
        scoreyou += 1;
        document.getElementById("scoreyou").innerHTML = scoreyou;
    } else if (jawaban === "Kalah") {
        scorebot += 1;
        document.getElementById("scorebot").innerHTML = scorebot;
    }

    if (scorebot === 9 && scoreyou < 4) {
        alert("seems like somebody gonna lose this time");
    }

    if (scorebot >= 10 || scoreyou >= 10) {
        document.getElementById("button").disabled = true;
        setTimeout(() => {
            window.location.reload();
        }, 10000);
        if (scorebot >= 10) {
            judgement.innerHTML = "It's done. I know Youre Doing Youre Best";
        }
        if (scoreyou >= 10) {
            judgement.innerHTML = "Very Well. You Wanna Rematch?";
        }
    }
}

class Choose extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <span><i class="far fa-hand-paper" style={{ fontSize: '80px', margin: '20px', cursor: 'pointer' }} onClick={kertas}
                    id="kertas"></i></span>
                <span><i class="far fa-hand-rock" style={{ fontSize: '80px', margin: '20px', cursor: 'pointer' }} onClick={batu}
                    id="batu"></i></span>
                <span><i class="far fa-hand-scissors" style={{ fontSize: '80px', margin: '20px', cursor: 'pointer' }} onClick={gunting}
                    id="gunting"></i></span><br /><br />
                <span><button onClick={yuk} id="button">Let's see</button><br /></span>
            </div>
        );
    }
}

export default Choose;