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

function array() {
    let items = toItem.value
    let list=""
        list+=`
        <li>
           <div style="font-size: 1.2rem; margin-bottom: 0.5rem; word-break: keep-all;">${items}</div>
           <button id="btns" style="margin-right: 1rem;" class="del-btn">Delete</button>
           <button id="btns" class="don-btn">Done</button>
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
        document.querySelector("#pop-up").style.height="100vh"
        document.querySelector("#inner-pop").style.display="inline"
    }, false)
}


let retBtn = document.getElementById("ret-btn")
retBtn.addEventListener("click", function() {
    document.getElementById("pop-up").style.height="0vh"
    document.getElementById("inner-pop").style.display="none"
})

cleBtn.addEventListener("click", function() {
    listArr=[]
    oList.innerHTML=""
    localStorage.clear()
})