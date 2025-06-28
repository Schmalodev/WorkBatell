const button = document.getElementById("start_btn");
const reset = document.getElementById("reset");
const save = document.getElementById("save");

var count = document.getElementById("timer_count");
var name = document.getElementById("name").value;
var sek = 0;
var min = 0;
var hour = 0;

let stoppuhr = null

button.addEventListener("click", function(){
    if(button.value == "Start"){
        stoppuhr = setInterval(()=>{
            button.value = "Stop"
            sek++;
            const minut = Math.floor(sek / 60);
            const hour = Math.floor(minut / 60);
            const restSek = sek % 60;
    
            count.innerHTML = hour+":"+minut+":"+restSek
        }, 100)
    }else{
        button.value = "Start";
        clearInterval(stoppuhr);
    }
})

reset.addEventListener("click", function(){
    window.location.href = "../html/pomodoro.html"
})

save.addEventListener("click", function(){
    fetch("https://workback-16op.onrender.com/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:{
            "Sek": sek,
            "Min": min,
            "Houre": hour,
            "Names": "name"
        }
    })
    .then(data => data.json())
    .then(response => console.log(response))
})
