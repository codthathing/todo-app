let toItem = document.getElementById("todo-item")
let subBtn = document.getElementById("sub-btn")
let oList = document.getElementById("ol-list")
let cleBtn = document.getElementById("clear-btn")
let listDiv = document.getElementById("list-div")

//localStorage.clear()
let saveMyList = JSON.parse(localStorage.getItem("list"))
if (saveMyList) {
    oList.innerHTML = saveMyList
}

subBtn.addEventListener("click", function() {
    if (toItem.value) {
        array()
        toItem.value=""
        localStorage.setItem("list", JSON.stringify(oList.innerHTML))
        window.location.reload()
    }
})

let list=``
function array() {
    let items = toItem.value
        list+=`
        <li>
           <div id="li-text">${items}</div>
           <button style="margin-right: 1rem;" class="del-btn button">Delete</button>
           <button class="don-btn button">Done</button>
        </li>   
        `
    oList.innerHTML+=list
}

let delBtn = document.getElementsByClassName("del-btn")
for (var x=0; x<delBtn.length; x++) {
    delBtn[x].addEventListener("click", function() {
        var delList = this.parentElement;
        delList.style.display="none"
        localStorage.setItem("list", JSON.stringify(oList.innerHTML))
    }, false)
}

let donBtn = document.getElementsByClassName("don-btn")
for (var i=0; i<donBtn.length; i++) {
    donBtn[i].addEventListener("click", function() {
        var delList = this.parentElement;
        delList.style.display="none"
        localStorage.setItem("list", JSON.stringify(oList.innerHTML))
        document.querySelector("#pop-up").classList.add("open-pop")
    }, false)
}


let retBtn = document.getElementById("ret-btn")
retBtn.addEventListener("click", function() {
    document.getElementById("pop-up").classList.remove("open-pop")
})

cleBtn.addEventListener("click", function() {
    listArr=[]
    oList.innerHTML=""
    localStorage.clear()
})