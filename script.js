

const from = document.getElementById("from");
const input = document.querySelector(".input")
const ulEl = document.getElementById("ul");
let x = 0;
from.addEventListener("submit",(event)=>{
    event.preventDefault() ;
    todolist(); 
    
});


function todolist() {
        const inputText =input.value;
        const liEl = document.createElement("li");
        liEl.innerText =inputText;
        ulEl.appendChild(liEl);
        liEl.classList.add("border");
        liEl.classList.add("sm:mr-[6.3rem]");
        liEl.classList.add("mr-6")
        liEl.classList.add("sm:py-3");
        liEl.classList.add("py-2");
        liEl.classList.add("pl-3");
        liEl.classList.add("rounded");
        liEl.classList.add("bg-emerald-400");
        liEl.classList.add("text-xl");
        liEl.classList.add("text-white");
        liEl.classList.add("flex");
        liEl.classList.add("justify-between");
        
        const checkBtn = document.createElement("div");
        checkBtn.innerHTML = `<i class="fa-solid fa-square-check check mt-1.5 mr-5 text-green-900"><i class="fa-solid fa-trash delete pl-3 text-red-500"></i></i></li>`
          liEl.appendChild(checkBtn);
   input.value = "";
   
   const check = document.querySelector(".check");
   check.addEventListener("click",()=>{
     liEl.classList.toggle("text-red-500");
     liEl.classList.add("font-bold");
     check.classList.add("text-emerald-200");
   });
   
   

   
   const deleteEl = document.querySelector(".delete");

   deleteEl.addEventListener("click",()=>{
    liEl.remove();
   });

}

