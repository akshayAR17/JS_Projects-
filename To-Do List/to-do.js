const textBox = document.getElementById('textbox');
const listContainer = document.getElementById('list-container');

//function to add the task
function addTask(){
    if(textBox.value === ''){
        alert("Add your task brooo!!");
    }
    else{
        //create element and append them onto the list container
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        listContainer.append(li);

        //to add x icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("Checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
