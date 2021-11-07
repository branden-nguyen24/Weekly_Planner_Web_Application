import axios from 'axios'

const listAdd = (task,taskId,id) => {
    return {
        type: "ADD",
        newTask: task,
        taskId: taskId,
        id: id,
    }
}

const deleteTask = (task,taskId,id) => {
    return {
        type: "DELETE",
        target: task,
        id: id,
        taskId: taskId
    }
}

const resetTask = () => async dispatch => {
    console.log("ACTION: RESETTING TO DEFAULT WEEKS")
    try {
        const res = await axios.get(`/api/resetweek`)
        console.log(res.data)
        dispatch({
            type: "DEFAULT_WEEK",
            payload: res.data
        })
    }
    catch (e) {
        console.log(e)
    }
}

const userWeek = () => async dispatch => {
    console.log("ACTION: USER WEEKS LOADING")
    try {
            const res = await axios.get(`/api/weekly`)
            dispatch({
                type:"USER_WEEK",
                items: res.data
            })
    }
    catch (e){
        console.log(e)
    }
}


export { listAdd, deleteTask, resetTask, userWeek }