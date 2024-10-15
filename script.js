const questions = [
  {
    question: "Which of these animals is native to New Zealand?",
    options: ["Kangaroo", "Kiwi bird", "Koala", "Emu"],
    answer: "Kiwi bird",
  },
  {
    question: "What is the capital city of New Zealand?",
    options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    answer: "Wellington",
  },
  {
    question: "What is the name of the indigenous people of New Zealand?",
    options: ["Maori", "Aborigines", "Inuit", "Sami"],
    answer: "Maori",
  },
  {
    question: "Which of these films was primarily shot in New Zealand?",
    options: [
      "Harry Potter series",
      "Lord of the Rings trilogy",
      "Pirates of the Caribbean",
      "Star Wars series",
    ],
    answer: "Lord of the Rings trilogy",
  },
  {
    question: "What is the highest mountain in New Zealand?",
    options: [
      "Mount Cook (Aoraki)",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley",
    ],
    answer: "Mount Cook (Aoraki)",
  },
  {
    question: "Which city in New Zealand is known as the 'City of Sails'?",
    options: ["Auckland", "Wellington", "Dunedin", "Queenstown"],
    answer: "Auckland",
  },
  {
    question: "What is the official national sport of New Zealand?",
    options: ["Cricket", "Rugby Union", "Soccer", "Netball"],
    answer: "Rugby Union",
  },
  {
    question: "Which sea lies to the west of New Zealand?",
    options: ["Tasman Sea", "Coral Sea", "South China Sea", "Arafura Sea"],
    answer: "Tasman Sea",
  },
  {
    question: "What is the traditional Maori greeting called?",
    options: ["Haka", "Hongi", "Powhiri", "Waka"],
    answer: "Hongi",
  },
  {
    question:
      "Which New Zealand town is famous for its geothermal activity and Maori culture?",
    options: ["Rotorua", "Christchurch", "Hamilton", "Napier"],
    answer: "Rotorua",
  },
];
const q = questions[0].question;
console.log(q);
const iQuestion = document.getElementById("question");
iQuestion.innerText = questions[0].question;

const a = document.getElementById("first");
a.innerText = questions[0].options[0];
console.log(a);

const b = document.getElementById("second");
b.innerText = questions[0].options[1];
console.log(b);

const c = document.getElementById("third");
c.innerText = questions[0].options[2];
console.log(c);

const d = document.getElementById("forth");
d.innerText = questions[0].options[3];
console.log(d);

function clearTheBackground(){
  const color=document.getElementById('first')
  color.style.backgroundColor=null
  const colora=document.getElementById('second')
  colora.style.backgroundColor=null
  const colorb=document.getElementById('third')
  colorb.style.backgroundColor=null
  const colorc=document.getElementById('forth')
  colorc.style.backgroundColor=null
}

function firstClick(){
  clearTheBackground()
  const element=document.getElementById('first')
  element.style.backgroundColor="yellow";
}

function secondClick(){
  clearTheBackground()
  const element=document.getElementById('second')
  element.style.backgroundColor="green";
  
};

function thirdClick(){
  clearTheBackground()
  const element=document.getElementById('third')
  element.style.backgroundColor="red";
};

function forthClick(){
  clearTheBackground()
  const element=document.getElementById('forth')
  element.style.backgroundColor="blue";
};
function submitAnswer(){

}

// Add your code underneath this comment.
