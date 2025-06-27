const button = document.getElementById("start_btn");
var count = document.getElementById("timer_count");
var sek = 0;

button.addEventListener("click", function(){
    if(button.value == "Start"){
        const stoppuhr = setInterval(()=>{
            button.value = "Stop"
            sek++;
            const minut = Math.floor(sek / 60);
            const hour = Math.floor(minut / 60);
            const restSek = sek % 60;
    
            count.innerHTML = hour+":"+minut+":"+restSek
        }, 100)
    }else{
        window.location.href = "../html/pomodoro.html"
    }
})