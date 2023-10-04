
let questions = [
    {
        id: 1,
        question: "What is a verb",
        answer:"A word that shows action or state of being",
        options: [
            "A word that describes a person,place,or thing",
            "A word that shows action or state of being",
            "A word that modifies a verb or adjective",
            "A word that joins words or groups of words"
        ]   
    },
    {
        id: 2,
        question: "What is adverb?",
        answer: "A word that modifies a verb or adjective",
        options: [
          "A word that describes a person,place,or thing",
          "A word that shows action or state of being",
          "A word that modifies a verb or adjective",
          "A word that joins words or groups of words"
        ]
      },
      {
        id: 3,
        question: "When do we use a noun?",
        answer: "To name a person,place, or thing",
        options: [
          "To describe a person's action",
          "To modify an adjective",
          "To join words or groups of words",
          "To name a person,place, or thing"
        ]
      },
      {
        id: 4,
        question: "what is the adjective in the sentence 'The big dog barked loudly'?",
        answer: "big",
        options: [
          "The",
          "big",
          "dog",
          "loudly"
        ]
      },
      {
        id: 5,
        question: "which sentence contains a verb?",
        answer: "The fast car raced down the street.",
        options: [
          "The big dog barked loudly.",
          "The yellow flowers smelled sweet.",
          "The tall tree swayed in the wind.",
          "The fast car raced down the street."
        ]
      },
     
     
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}