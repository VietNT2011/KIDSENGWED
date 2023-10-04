let questions = [
    {
        id: 1,
        question: "What is a large, intelligent marine mammal that has a blowhole on top  of its head?",
        answer:"Dolphin",
        options: [
            "Whale",
            "Dolphin",
            "Shark",
            "Octopus"
        ]   
    },
    {
        id: 2,
        question: "What is a beautiful natural view of mountains , forests, and rivers called?",
        answer: "A word that modifies a verb or adjective",
        options: [
          "Cityscape",
          "Seascape",
          "Landscape",
          "Skyscape"
        ]
      },
      {
        id: 3,
        question: "Which item is used to erase mistakes in school?",
        answer: "Eraser",
        options: [
          "Notebook",
          "Pencil",
          "Pen",
          "Eraser"
        ]
      },
      {
        id: 4,
        question: "What type of landform is characterized by steep cliffs and valleys carved by a river?",
        answer: "Canyon",
        options: [
          "Desert",
          "Mountain",
          "Canyon",
          "Pond"
        ]
      },
      {
        id: 5,
        question: "What is the name of the mythical creature that is half-human and half-fish?",
        answer: "Mermaid",
        options: [
          "Dragon",
          "Mermaid",
          "Pegasus",
          "Phoenix"
        ]
      },
      {
        id: 5,
        question: "Which item is used for writing in school?",
        answer: "Pencil",
        options: [
          "Notebook",
          "Pencil",
          "Water bottle",
          "Sunglasses"
        ]
      },
      {
        id: 6,
        question: "Which mythical creature is typically depicted as a large humanoid with immense physical strength?",
        answer: "Giant",
        options: [
        "Zomebie",
        "Genie",
        "Giant",
        "Unicorn"
      ]
    },
    {
        id: 7,
        question: "What is a group of stars that form a pattern called?",
        answer: "Constellation",
        options: [
        "Galaxy",
        "Asteroid",
        "Planet",
        "Constellation"
      ]
    },
    {
        id: 8,
        question: "What is the natural satellite that orbits the Earth called?",
        answer: "Moon",
        options: [
        "Sun",
        "Moon",
        "Star",
        "Planet"
      ]
    },
    {
        id: 9,
        question: "What is a person who works in an office and helps with administrative tasks called?",
        answer: "Receptionist",
        options: [
        "Teacher",
        "Doctor",
        "Tailor",
        "Receptionist"
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