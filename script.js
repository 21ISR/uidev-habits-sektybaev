const formEl = document.querySelector('.form')
const inputEl = document.querySelector('.form__input')
const habitContainerEl = document.querySelector('.habit-list')

function createHabit(habit) {
    return  `<li class="habit">
                <div class="habit__header">
                    <h2 class="habit__name">${habit.name}</h2>
]                   <button class="habit__delete"></button>
                </div>
                <div class="habit__days">...</div>
            </li>`
          
}
function handleSubmit(e) {
    e.preventDefault()

    const newHabit = {
        name: inputEl.value,
        id: Date.now()
    }
    
    const newHabitEl = createHabit(newHabit)

    habitContainerEl.innerHTML += newHabitEl
    
    inputEl.value = ""
}

formEl.addEventListener('submit', handleSubmit)