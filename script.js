function OpenCards() {
  var allelem = document.querySelectorAll(".elems");
  var fullelem = document.querySelectorAll(".Fullelem");
  var FullelemBack = document.querySelectorAll(".Fullelem .back");

  allelem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullelem[elem.id].style.display = "block";
    });
  });

  FullelemBack.forEach(function (back) {
    back.addEventListener("click", function () {
      fullelem[back.id].style.display = "none";
    });
  });
}

OpenCards();



let form = document.querySelector(".addTask form");
let task = document.querySelector(".addTask form #task-input");
let textarea = document.querySelector(".addTask form textarea ");
let checkbox = document.querySelector(".addTask form #check");



function todolist() {
  var currentTask = [];

  if (localStorage.getItem("currnetask")) {
    currentTask = JSON.parse(localStorage.getItem("currnetask"));
  } else {
    console.log("current task is empty");
  }

  function rendertask() {
    let allTask = document.querySelector(".allTask");

    let sum = "";

    currentTask.forEach(function (elem) {
      sum += ` <div class="task">
                        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>                      
                        <button>Mark as Completed</button>
                    </div>`;
    });

    allTask.innerHTML = sum;
    localStorage.setItem("currnetask", JSON.stringify(currentTask));

     document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        rendertask();
      });
    });
  }

  rendertask();

  form.addEventListener("submit", function (h) {
    h.preventDefault();
    // console.log(task.value);
    // console.log(textarea.value);
    // console.log(checkbox.checked);
    currentTask.push({
      task: task.value,
      details: textarea.value,
      imp: checkbox.checked,
    });
    
    rendertask();
    
    task.value = "";
    details: textarea.value = "";
    checkbox.checked = false;
    
  });
}

todolist();




function DailyPlanner(){
  var pln = document.querySelector('.daily-planner')

let dayPlanData =JSON.parse(localStorage.getItem('dayPlanData')) || {}


let sec = Array.from({length:18},(_,idx)=>`${6+idx}:00 - ${7+idx}:00`)


let time = ""
sec.forEach(function(elem,idx){
  
  var savedata = dayPlanData [idx] || ''   
  
  time = time + ` <div class="daily-plan-timer">
  
  <p>${elem} </p>
  <input id=${idx} type="text" placeholder="........."  value=${savedata}>
  </div>`
  
  
})


pln.innerHTML = time



var dailyPlannerInput = document.querySelectorAll('.daily-planner input')

dailyPlannerInput.forEach(function(elem){
  elem.addEventListener('input',function(){
    dayPlanData[elem.id]= elem.value

   localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
    
    
  })

})
}

DailyPlanner()