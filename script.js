const DAYS = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]

const formEl = document.querySelector('.form')
const inputEl = document.querySelector('.form__input')
const habitContainerEl = document.querySelector('.habit-list')

function loadHabits() {
    const data = localStorage.getItem('habits')
    
    return data ? JSON.parse(data): []
}

function saveHabits(habits) {
    localStorage.setItem("habits", JSON.stringify(habits))
    

} 

function createDays(habit) {
    return DAYS.map((el) => `
        <div class="day">
            <span class="day__label">${el}</span>
            <div class="day__circle"></div>
        </div>
    `
    ).join("")
}




function createHabit(habit) {
    return `<li class="habit">
                    <div class="habit__header">
                        <h2 class="habit__name">${habit.name}</h2>
                        <button data-id=${habit.id} class="habit__delete">Удалить привычку</button>
                    </div>
                    <div class="habit__days">${createDays(habit)}</div>
                </li>`
}

function render() {
    const habits = loadHabits()

    habitContainerEl.innerHTML = habits.map((habit) => createHabit(habit)).join("")
}


function handleSubmit(e) {
    e.preventDefault()

    

    const newHabit = {
        name: inputEl.value,
        id: Date.now()
    }

   

    const oldHabits = loadHabits()

    const newHabits = [...oldHabits, newHabit]
    
    saveHabits(newHabits)


    render()

    inputEl.value = ""
}

formEl.addEventListener('submit', handleSubmit)

function handleHabits(e) {
    const deleteBtn = e.target.closest('.habit__delete')

    if (deleteBtn) {
        const habits = loadHabits()

        const filteredHabits = habits.filter((el) => el.id != deleteBtn.dataset.id)

        saveHabits(filteredHabits)

        render()
    }

}


habitContainerEl.addEventListener('click', handleHabits)


render()