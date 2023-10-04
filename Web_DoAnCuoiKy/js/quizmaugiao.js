let questions = [
    {
        id: 1,
        question: " What letter comes after 'A' in the alphabet?",
        answer:"B",
        options: [
            "B",
            "C",
            "D",
            "E"
        ]   
    },
    {
        id: 2,
        question: "How many fingers do you have on one hand?",
        answer: "5",
        options: [
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        id: 3,
        question: "What is the name of the number that comes after'ten'?  ",
        answer: "Eleven",
        options: [
          "Eleven",
          "Twelve",
          "Thirteen",
          "EFourteen"
        ]
      },
      {
        id: 4,
        question: "What is the name of the number that tells you the position of something in a series?",
        answer: "Ordinal number",
        options: [
          "Ordinal number",
          "Cardinal number",
          "Even number",
          "Odd number"
        ]
      },
      {
        id: 5,
        question: "What punctuation mark is used at the end of a question?",
        answer: "Question mark(?)",
        options: [
          "Period(.)",
          "Exclamation mark(!)",
          "Question mark(?)",
          "Comma(,)"
        ]
      },
      {
        id: 5,
        question: "What color is the sun?",
        answer: "Yellow",
        options: [
          "Red",
          "Yellow",
          "Blue",
          "Brown"
        ]
      },
      {
        id: 6,
        question: "Which instrument do you hit to make music?",
        answer: "Drums",
        options: [
        "Piano",
        "Trumpet",
        "Drums",
        "Violin"
      ]
    },
    {
        id: 7,
        question: "What color is a banana?",
        answer: "Yellow",
        options: [
        "Red",
        "Yellow",
        "Blue",
        "Green"
      ]
    },
    {
        id: 8,
        question: "What instrument do you play by pressing keys to make sound? ",
        answer: "Piano",
        options: [
        "Guitar",
        "Drums",
        "Piano",
        "Violin"
      ]
    },
    {
        id: 9,
        question: "What punctuation mark is used to separate items in a list?",
        answer: "Comma(,)",
        options: [
        "Comma(,)",
        "Period(.)",
        "Question mark(?)",
        "Exclamation mark(!)"
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