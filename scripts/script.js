// All cards object
const cards = [
  {
    id: "1",
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide",
    status: "pending"
  },
  {
    id: "2",
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "pending"
  },
  {
    id: "3",
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "pending"
  },
  {
    id: "4",
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud intrastructure.",
    status: "pending"
  },
  {
    id: "5",
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "pending"
  },
  {
    id: "6",
    companyName: "MegaCorp Solutions",
    position: "Javascript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development.",
    status: "pending"
  },
  {
    id: "7",
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Remote",
    salary: "$120,000 - $160,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and package included.",
    status: "pending"
  },
  {
    id: "8",
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "We are looking for an experienced Forntend Developer to build scalable web applications using React and TypeScript. You will work a talented team on cutting-edge projects.",
    status: "pending"
  }
];

const totalCounterList=document.getElementById('total-counter-list');
const stayingCounterList=document.getElementById('staying-counter-list');

const totalCount=document.getElementById('total-count');
const interviewCount=document.getElementById('interview-count');
const rejectedCount=document.getElementById('rejected-count');

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const cardContainer = document.querySelector(".card-container");
const allCardContainer = document.getElementById("all-card-container");
const interviewCardContainer = document.getElementById(
  "interview-card-container",
);
const rejectedCardContainer = document.getElementById(
  "rejected-card-container",
);

totalCount.innerText=cards.length;

function cardWithInfo(){
  allCardContainer.innerHTML = "";
  interviewCardContainer.innerHTML = "";
  rejectedCardContainer.innerHTML = "";

  cards.forEach((cardObject) => {
    const card = cardMaker();
    const companyName = card.querySelector(".companyName");
    const position = card.querySelector(".position");
    const location = card.querySelector(".location");
    const type = card.querySelector(".type");
    const salary = card.querySelector(".salary");
    const interviewNotifier = card.querySelector(".interview-notifier");
    const rejectedNotifier = card.querySelector(".rejected-notifier");
    const description = card.querySelector(".description");
    const interviewBtn = card.querySelector("#interviewBtn");
    const rejectedBtn = card.querySelector("#rejectedBtn");
    const deleteBtn = card.querySelector("#deleteBtn");
    deleteBtn.addEventListener('click',function(){
      deleteCard(this.closest('.card').dataset.id);
      totalCount.innerText=cards.length;
      totalCounterList.innerText=cards.length;
      cardWithInfo();
      if(cards.length===0){
        console.log(emptyCard());
        allCardContainer.appendChild(emptyCard());
      } 
    },false);
    card.dataset.id = cardObject.id;
    companyName.innerText = cardObject.companyName;
    position.innerText = cardObject.position;
    location.innerText = cardObject.location;
    type.innerText = cardObject.type;
    salary.innerText = cardObject.salary;
    description.innerText = cardObject.description;
    interviewBtn.innerText = "INTERVIEW";
    rejectedBtn.innerText = "REJECTED";
    interviewNotifier.innerText = "INTERVIEW";
    rejectedNotifier.innerText = "REJECTED";

    interviewBtn.addEventListener('click',function(){
      changeStatus(this.closest('.card').dataset.id,'interview');
      interviewCount.innerText=interviewCounter();
      rejectedCount.innerText=rejectedCounter();
      cardWithInfo();
    },false);
    
    rejectedBtn.addEventListener('click',function(){
      changeStatus(this.closest('.card').dataset.id,'rejected');
      rejectedCount.innerText=rejectedCounter();
      interviewCount.innerText=interviewCounter();
      cardWithInfo();
    },false);

    interviewNotifier.classList.add("interview-notifier-inactive");
    rejectedNotifier.classList.add("rejected-notifier-inactive");
    allCardContainer.appendChild(card);

    if (cardObject.status === "interview") {
        interviewNotifier.classList.remove("interview-notifier-inactive");
        interviewNotifier.classList.add("interview-notifier-active");
        interviewCardContainer.appendChild(card.cloneNode(true));

      } else if (cardObject.status === "rejected") {
        rejectedNotifier.classList.remove("rejected-notifier-inactive");
        rejectedNotifier.classList.add("rejected-notifier-active");
        rejectedCardContainer.appendChild(card.cloneNode(true));
        
      }
  });
}
cardWithInfo();

function emptyCard(){
  const emptyCardContainer=document.createElement('div');
  const figure=document.createElement('figure');
  const img=document.createElement('img');
  const emptyCardHeading=document.createElement('h2');
  const emptyCardParagraph=document.createElement('p');

  emptyCardHeading.innerText='No jobs available';
  emptyCardParagraph.innerText='Check back soon for job opportunities';

  emptyCardContainer.classList.add('empty-card-container');
  img.setAttribute('src','./assets/images/jobs.png');
  emptyCardHeading.classList.add('empty-card-heading');
  emptyCardParagraph.classList.add('empty-card-paragraph');

  emptyCardContainer.appendChild(figure);
  figure.appendChild(img);
  emptyCardContainer.appendChild(emptyCardHeading);
  emptyCardContainer.appendChild(emptyCardParagraph);
  return emptyCardContainer;
}


function rejectedCounter(){
  let count=0;
  cards.forEach((card)=>{
    if(card.status==='rejected'){
      count++;
    }
  });
  return count;
}

function interviewCounter(){
  let count=0;
  cards.forEach((card)=>{
    if(card.status==='interview'){
      count++;
    }
  });
  return count;
}

// DELETE CARDS FUNCTION
function deleteCard(id) {
  const index = cards.findIndex(card => card.id === id);
  if (index !== -1) {
    cards.splice(index, 1);
  }
}

// All button
document.addEventListener(
  "DOMContentLoaded",
  () => {
    containerNavigate();
    allCardContainer.classList.remove("all-card-container-inactive");
    totalCounterList.innerText=cards.length;
    stayingCounterList.innerText=cards.length;
  },
  false,
);

allBtn.addEventListener('click',()=>{
  containerNavigate();
    allCardContainer.classList.remove("all-card-container-inactive");
    allBtn.style.backgroundColor = "blue";
    allBtn.style.color = "white";
    totalCounterList.innerText=cards.length;
},false)

allBtn.addEventListener('blur',()=>{
  allBtn.style.backgroundColor='transparent';
  allBtn.style.color='black';
},false);


// Interview button
interviewBtn.addEventListener(
  "click",
  () => {
    containerNavigate();
    interviewCardContainer.classList.remove(
      "interview-card-container-inactive",
    );
    interviewBtn.style.backgroundColor = "blue";
    interviewBtn.style.color = "white";
    stayingCounterList.innerText=interviewCounter();
    if(interviewCounter()===0){
      interviewCardContainer.innerHTML='';
      interviewCardContainer.appendChild(emptyCard());
    }
  },
  false,
);

interviewBtn.addEventListener('blur',()=>{
  interviewBtn.style.backgroundColor = "transparent";
  interviewBtn.style.color = "black";
},false);

// Reject button
rejectedBtn.addEventListener(
  "click",
  () => {
    containerNavigate();
    rejectedCardContainer.classList.remove("rejected-card-container-inactive");
    rejectedBtn.style.backgroundColor = "blue";
    rejectedBtn.style.color = "white";
    stayingCounterList.innerText=rejectedCounter();
    if(rejectedCounter()===0){
      rejectedCardContainer.innerHTML='';
      rejectedCardContainer.appendChild(emptyCard());
    }
  },
  false,
);

rejectedBtn.addEventListener('blur',()=>{
  rejectedBtn.style.backgroundColor = "transparent";
  rejectedBtn.style.color = "black";
});


// Change status function
function changeStatus(cardId, status) {
  cards.forEach((card) => {
    if (cardId === card.id) {
      card.status = status;
    }
  });
}

// Container navigate funcction
function containerNavigate() {
  allCardContainer.classList.add("all-card-container-inactive");
  interviewCardContainer.classList.add("interview-card-container-inactive");
  rejectedCardContainer.classList.add("rejected-card-container-inactive");
}

// Card maker function
function cardMaker() {
  // Create all elements
  const card = document.createElement("div");
  const companyName = document.createElement("h1");
  const position = document.createElement("p");
  const listContainer = document.createElement("ul");
  const location = document.createElement("li");
  const type = document.createElement("li");
  const salary = document.createElement("li");
  const interviewNotifier = document.createElement("div");
  const rejectedNotifier = document.createElement("div");
  const description = document.createElement("p");
  const btns = document.createElement("div");
  const interviewBtn = document.createElement("button");
  const rejectedBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const i = document.createElement("i");

  // Add class for styling
  card.classList.add("card");
  companyName.classList.add("companyName");
  position.classList.add("position");
  listContainer.classList.add("list-container");
  location.classList.add("location");
  type.classList.add("type");
  salary.classList.add("salary");
  interviewNotifier.classList.add("interview-notifier");
  rejectedNotifier.classList.add("rejected-notifier");
  description.classList.add("description");
  btns.classList.add("btns");
  interviewBtn.setAttribute("id", "interviewBtn");
  rejectedBtn.setAttribute("id", "rejectedBtn");
  deleteBtn.setAttribute("id", "deleteBtn");
  i.classList.add("fa-solid", "fa-trash");

  // Making card structure
  card.appendChild(companyName);
  card.appendChild(position);
  card.appendChild(listContainer);

  listContainer.appendChild(location);
  listContainer.appendChild(type);
  listContainer.appendChild(salary);

  card.appendChild(interviewNotifier);
  card.appendChild(rejectedNotifier);
  card.appendChild(description);
  card.appendChild(btns);

  btns.appendChild(interviewBtn);
  btns.appendChild(rejectedBtn);

  card.appendChild(deleteBtn);
  deleteBtn.appendChild(i);

  return card;
}
