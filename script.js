let score = 0;
let points = 10;
let questions = document.body.childNodes;
let questionIterator =1;

function correct(button){
    score+=points; //adds 10 to the score
    button.style.backgroundColor = 'green';
    let parent = button.parentNode; //gets parent of button (div)
    let siblings = parent.childNodes; //lists of other buttons
    siblings.forEach(element => {
        element.disabled = true; //disables buttons
    });
    questionIterator+=2;
    questions[questionIterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}

function incorrect(button){
    score-=points; 
    button.style.backgroundColor = 'red';
    let parent = button.parentNode; //gets parent of button (div)
    let siblings = parent.childNodes; //lists of other buttons
    siblings.forEach(element => {
        element.disabled = true; //disables buttons
    });
    questionIterator+=2;
    questions[questionIterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}

function calculateScore(button){
    button.innerHTML = "Score: " + score;
    if(score == -100){
        let ricklink = document.createElement("a");
        ricklink.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        ricklink.innerHTML = "Prize :)";
        ricklink.target = "_blank";
        button.appendChild(ricklink);
    }
}