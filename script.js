let saveEl = document.getElementById("save-el")
let count = 0;
let co = document.getElementById("count-el")
function ini(){
    count ++;
    co.innerHTML = count
    
}
function save(){
    let c = count + " - "
    saveEl.innerHTML += c
    count = 0
    co.innerHTML = count
}