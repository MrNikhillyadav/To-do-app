const btn = document.querySelector('#btn');
const list = document.querySelector('.list');
const input = document.querySelector('#input-box');

function addtask(){
    if(input.value === ''){
        alert('Please write something to add');
    }else{
        const li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savedata()
}

list.addEventListener("click", function(f){
    if(f.target.tagName === 'LI'){
        f.target.classList.toggle('checked');
        savedata()
    }
    else if(f.target.tagName === "SPAN"){
        f.target.parentElement.remove();
        savedata()
    }
},false);

function savedata(){
    localStorage.setItem("data", list.innerHTML);
}

function showtask(){
    list.innerHTML = localStorage.getItem('data');
    
}
showtask();