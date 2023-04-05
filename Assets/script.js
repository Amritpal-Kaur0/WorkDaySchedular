// set up snowflakes on screen 
document.addEventListener("click", (e) => {
  //create span for snowflake
  var snowflake = document.createElement("span");
  snowflake.classList.add("snowflake");
  //set position of snowflake to mouse pointer's position
  snowflake.style.left = e.offsetX + "px";
  snowflake.style.top = e.offsetY + "px";
  //select random number between 20 and 100
  var size = Math.random() * (100 - 20 + 1) + 20;
  //set width and height
  snowflake.style.width = size + "px";
  snowflake.style.height = size + "px";
  document.body.appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 1000);
});

let description =$('.description');
let Savebtn =$('.saveBtn');
// console.log(description)

// Save button function 
function save(){
  let value =$(this).siblings('.description').val();
  console.log(value);
  var time = $(this).parent().attr('id');
  // let time =$(this).siblings('.description').attr('id');
  localStorage.setItem(time,value);
}
save();
// on click save button 
Savebtn.on("click",save)

//TODO: Add code to display the current date in the header of the page.
function updateTime() {
  const dateElement = $("#date");
  const timeElement = $("#time");
  const Currentdate = dayjs().format("dddd-DD-MMMM-YYYY");
  const Currenttime = dayjs().format("hh:mm:ss:A");
  dateElement.text(Currentdate);
  timeElement.text(Currenttime);
}
// calling function 
updateTime();
// updating every second 
setInterval(updateTime,1000);

let timeblock=$('.time-block')
const currentHour = dayjs().format('H');
// toggleclass and set it according to and current hour 
function hourlyColor() {
timeblock.each(function() {
    const blockHour = parseInt(this.id);
    
    $(this).toggleClass('past', blockHour < currentHour);
    $(this).toggleClass('present', blockHour == currentHour);
    $(this).toggleClass('future', blockHour > currentHour);
  });
}
hourlyColor();

timeblock.each(function() {
  const key = $(this).attr('id');
  const value = localStorage.getItem(key);
  $(this).children('.description').val(value);
  
});

PreventDefault();
