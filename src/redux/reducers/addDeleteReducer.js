const INITIAL_STATE = {items: [
    {
        name: "week goals",
        color: "white",
        tasks: [
        ],
        key: 0
    },
    {
        name: "monday",
        color: "#D5DDE5",
        tasks: [
        ],
        key: 1
    },
    {
        name: "tuesday",
        color: "#FFEBE1",
        tasks: [
        ],
        key: 2
    },
    {
        name: "wednesday",
        color: "#FFF7E7",
        tasks: [

        ],
        key: 3
    },
    {
        name: "thursday",
        color: "#E9F4E6",
        tasks: [

        ],
        key: 4
    },
    {
        name: "friday",
        color: "#E4F2FA",
        tasks: [

        ],
        key: 5
    },
    {
        name: "saturday",
        color: "#F7EEFD",
        tasks: [

        ],
        key: 6
    },
    {
        name: "sunday",
        color: "#FEE9F2",
        tasks: [

        ],
        key: 7
    }
]}

const addDeleteReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "add":
            const newState = state.items;
            const newTask = {
                taskName: action.newTask,
                id: action.taskId
            }
            newState.forEach((day) => {
                if (day.key === action.id) {
                    day.tasks.push(newTask);
                }
            })
            return {
                ...state, items: newState
            };
        case "delete": 
            const new2 = state.items;
            new2.forEach((day) => {
                if (day.key === action.id) {
                    const test = day.tasks.filter((task) => task.id !== action.taskId)
                    day.tasks = test;
                }
            })
            return {
                ...state, items: new2
            }
        default:
            return state;
    }
}

export default addDeleteReducer