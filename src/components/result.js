import React from 'react';

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
                        <span>You</span>
                        <span id="scoreyou">0</span>
                    </div>
                    <div>
                        <span id="scorebot">0</span>
                        <span>Computer</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;