const INITIAL_STATE = {
    items: []
}

const addDeleteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD":
            console.log(state)
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
        case "DELETE":
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
        case "USER_WEEK":
            return {
                ...state, items: action.items
            };
        case "DEFAULT_WEEK":                       
            console.log("REDUCER: RESETTING TO DEFAULT SETTINGS")
            console.log(INITIAL_STATE);
            return {
                ...state, items: action.payload
            }
        default:
            return state;
    }
}

export default addDeleteReducer