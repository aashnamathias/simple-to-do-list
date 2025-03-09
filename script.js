const inputBox = document.getElementById("type");
const listcont = document.getElementById("list");

function addtask()
{
    if(inputBox.value === '')
        alert("Please enter a task");
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li);

        let delbuttn = document.createElement("span");
        delbuttn.innerHTML = "\u00d7";
        li.appendChild(delbuttn);
    }
    inputBox.value='';
    saveData();
}

inputBox.addEventListener("keypress",function(event){
    if(event.key == "Enter")
        addtask();
    saveData();
})

listcont.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listcont.innerHTML);
}

function getData(){
    listcont.innerHTML = localStorage.getItem("data");
}
getData();