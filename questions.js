let counterEl = document.getElementById("counter");
let startBtn = document.getElementById("start");
let count = 5;
    counterEl.textContent = "Time: " + count;

// let timer = setInterval(function(){
//     if(count == 0){
//         clearInterval(timer);
//     }
//     else{
//         counterEl.textContent = "Time: " + count;
//         count--;
//         console.log(count);
//     }
// }, 1000)
startBtn.addEventListener("click", function(){
    let timer = setInterval(function () {
        if (count == 0) {
            clearInterval(timer);
        }
        else {
            count--;
            counterEl.textContent = "Time: " + count;
            console.log(count);
        }
    }, 1000)
})