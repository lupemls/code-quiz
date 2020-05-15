const scoresEl = document.querySelector("#scores");

const scores = JSON.parse(localStorage.getItem("score"));

if(scores){
    for(key in scores){
        scoresEl.innerText += `${key}    ${scores[key]} \n`;
    }
} else{
    scoresEl.innerText = "No Scores to Display";
}