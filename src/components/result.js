import React from 'react';

function darkmode() {
    var button = document.getElementById("button");
    var body = document.getElementById("body");
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        button.style.backgroundColor = "white";
        button.style.color = "black";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    }
}


class Result extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <h3>
                    <div id="jawaban">
                        <span id="you"></span>
                        <span> vs </span>
                        <span id="bot"></span>
                    </div>
                    <div>
                        <p id="judgement"></p>
                    </div>
                </h3>
                <div id="score">
                    <div>
                        <span>You </span>
                        <span id="scoreyou">0</span>
                    </div>
                    <div>
                        <span id="scorebot">0 </span>
                        <span> Computer</span>
                    </div>
                </div>
                <div id="dark"><i className="fas fa-adjust" onClick={darkmode}></i></div>
            </div>
        );
    }
}

export default Result;