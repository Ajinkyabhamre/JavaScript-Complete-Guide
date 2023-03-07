push.addEventListener("click", (e)=>{
    e.preventDefault()
    if(document.querySelector('#newTask input').value.length == 0){
alert("add something")
    }else{
        // document.querySelector('#newTask input').innerHTML = " "
        document.querySelector("#Tasks").innerHTML += `
               <div class="task">
            <span id="taskname">
                ${document.querySelector("#newTask input").value}
            </span>
            <button class="delete">
                   delete
                </button>
        </div>
        
        `;
       
             var current_tasks = document.querySelectorAll(".delete");
             for (var i = 0; i < current_tasks.length; i++) {
               current_tasks[i].onclick = function () {
                 this.parentNode.remove();
               };
             }
    }
    
})