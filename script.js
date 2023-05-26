/* theme switcher */

const light = document.querySelector(".light")
const dark = document.querySelector(".dark")
dark.addEventListener("click" , () => {
    document.documentElement.classList.add("them2")
    dark.style.display = "none"
    light.style.display = "block"
})

light.addEventListener("click" , () => {
    document.documentElement.classList.remove("them2")
    light.style.display = "none"
    dark.style.display = "block"
})

/* add remove filter all code below */

/* foam elements */
const form = document.querySelector(".foam")
const submitBtn = document.querySelector(".submit")
const input = document.querySelector(".todo")

/* list and items */
const container = document.querySelector(".todo-list")
const footer = document.querySelector(".footer-flex")

/* footer buttons */
const itemsLeft = document.querySelector(".items-left")
const clearCompleteones = document.querySelector(".complete-todo")

/* filter buttons */
const all = document.querySelector(".all")
const complete = document.querySelector(".complete")
const active = document.querySelector(".active")

/* variable */
let totalTodo = 0
form.addEventListener("submit",main)



function main(event) {
    event.preventDefault()
    value = input.value
    const element = document.createElement("article")
    element.classList.add("todo-item")
    if (value !== ""){
        addItem(value,element)
        totalTodo += 1
        itemsLeft.textContent =  totalTodo
    } else if (value === "") {
        return
    }

    /* to mark them complete */
    const circleBtns = document.querySelectorAll(".circle")
       circleBtns.forEach((circle)=> {
           circle.addEventListener("click",markTodoCheck)
       })

    /* to remove them from list  */
    const crossBtns = document.querySelectorAll(".cross")
    crossBtns.forEach((cross)=> {
        cross.addEventListener("click",removeCompleteone)
    })
    /* to remove all complete todo  */
    clearCompleteones.addEventListener("click", clearAllcompleteonce)
}



function addItem(value,element) {
    element.innerHTML =  `
    <button class="circle-check">
    <div class="circle"></div>
    <img class="checkmark" src="images/icon-check.svg" alt="">
    </button>
    <p class="text">
      ${value} 
    </p>
    <button class="cross">
    <img src="images/icon-cross.svg" alt="">
    </button>`
    input.value = ""
    footer.style.display = "block"
    container.appendChild(element)
}

function markTodoCheck(event) {
    circle = event.target
    element = event.target.parentElement.parentElement
    element.classList.add("done")
    const  Check = element.querySelector(".checkmark")
    const  text = element.querySelector(".text")
    circle.style.display = "none"
    Check.style.display = "block"
    text.classList.add("text-done")
    totalTodo -= 1
    itemsLeft.textContent = totalTodo
}

function removeCompleteone(event) {
    element = event.target.parentElement.parentElement
    if (element.classList.contains("done")) {
        container.removeChild(element)
    } else {
        totalTodo-= 1
        itemsLeft.textContent = totalTodo
        container.removeChild(element)
    }
      
}

function clearAllcompleteonce() {
    const alltodo = document.querySelectorAll(".todo-item")
    if (alltodo.length > 1) {
        alltodo.forEach((todo)=> {
            if (todo.classList.contains("done")) {
                container.removeChild(todo)
            } else {
                return
            }
        })

    }
  
}

all.addEventListener("click",()=> {
    const alltodo = document.querySelectorAll(".todo-item")
    alltodo.forEach((todo)=> {
        todo.style.display = "flex"
    })
})

active.addEventListener("click",()=> {
    const alltodo = document.querySelectorAll(".todo-item")
    alltodo.forEach((todo)=> {
        if (todo.classList.contains("done")) {
            todo.style.display = "none"
        } else {
            todo.style.display = "flex"
        }

    })

})
complete.addEventListener("click",()=> {
    const alltodo = document.querySelectorAll(".todo-item")
    alltodo.forEach((todo)=> {
        if (todo.classList.contains("done")) {
            todo.style.display = "flex"
        } else {
            todo.style.display = "none"
        }

    })

})