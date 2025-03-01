const cards = document.querySelectorAll('.card');

for(let i = 0; i< cards.length; i++){
  const completedBtn = cards[i].querySelector('.completed-btn');
  const title = cards[i].querySelector(".title")
  completedBtn.addEventListener("click", function (event) {
    event.target.setAttribute('disabled', '');

    alert('Board updated Successfully');

    // decrement check task box
    const taskAssignedNum = parseInt(document.getElementById('task-assigned-num').innerText);
    const NewTaskAssignedNum = taskAssignedNum - 1;
    document.getElementById('task-assigned-num').innerText = NewTaskAssignedNum;
    
    if(taskAssignedNum === 1){
      alert('Congrates!!! You have completed all the current task');
    }

    // increment check task box
    const taskIncrement = parseInt(document.getElementById('task-increment').innerText);
    const newTaskIncrement = taskIncrement + 1;

    document.getElementById('task-increment').innerText = newTaskIncrement;


    // activity log message
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const amOrPm = (hour >= 12) ? " PM " : " AM ";

    const hour12 = (hour >= 12) ? hour - 12 : hour;
    const currentTime =`${hour12}:${minute}:${second} ${amOrPm}`;

    const messageContainer = document.getElementById('message-container');

    const div = document.createElement("div");
    
      div.innerHTML = `<div class="primary-bg p-4 rounded-lg mb-5">
                        <p>You have completed the task ${title.innerText} at ${currentTime}</p>
                      </div>`;
      
      messageContainer.appendChild(div);
    
  });
}

// date card section
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = days[d.getDay()];
document.getElementById('day').innerText = day;

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

let month = months[d.getMonth()];
document.getElementById('month').innerText = month;

document.getElementById("date-year").innerText = ` ${d.getDate()} ${d.getFullYear()}`;

//background color generate

document.getElementById('bg-color-creat').addEventListener('click', function(){
  firstNum =Math.floor(Math.random()*256);
  secondNum =Math.floor(Math.random()*256);
  thirdNum =Math.floor(Math.random()*256);

  const bgColor = `rgb(${firstNum},${secondNum},${thirdNum})`;

  document.getElementById('body').style.backgroundColor = bgColor;
})


// clear history functionality
document.getElementById("clear-history-btn").addEventListener('click', function(){
  document.getElementById('message-container').innerHTML= "";    
})


// open blog page
document.getElementById('discover-new').addEventListener('click', function(){
  window.location.href = "./blog.html"
});
