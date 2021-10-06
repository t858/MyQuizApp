var skip = document.getElementById('skip')
var score = document.getElementById('score')
var totalscore = document.getElementById('totalscore')
var countdown = document.getElementById('countdown')
var count = 0;
var scoreCount = 0;
var duration = 0;

var qa_set = document.querySelectorAll(".qa_set");
var qaAnsRow = document.querySelectorAll(".qa_set .qa_ans_row input");

skip.addEventListener('click', function(){
    step();
    //Time Per question

    duration = 10;
})

qaAnsRow.forEach(function(qaAnsRowSingle){

    qaAnsRowSingle.addEventListener("click", function(){
        setTimeout(function(){

            step();
            //Time per duration
            duration = 10;
        }, 300)

        // scores

        var valid = this.getAttribute("valid");
        if( valid == "valid"){

            scoreCount += 2
            score.innerHTML = scoreCount
            totalscore.innerHTML = scoreCount
        }
    })
})

// Loops through the question DOM

function step() {
    count += 1;
    for (var i = 0; i < qa_set.length; i++) {
        qa_set[i].className= 'qa_set';
        
    }

    qa_set[count].className = "qa_set active"
    if ( count == 50) {
        
        skip.style.display = "none"
        // Time per question
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }

}

// Time per question
var durationTime = setInterval(function(){

    if( duration == 10){

        duration = 0;
    }
    duration += 1
    countdown.innerHTML= duration;
    if(countdown.innerHTML == "10"){
        step()
    }
}, 1000)