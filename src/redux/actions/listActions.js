const listAdd = (task,taskId,id) => {
    return {
        type: "add",
        newTask: task,
        taskId: taskId,
        id: id,
    }
}

const deleteTask = (task,taskId,id) => {
    return {
        type: "delete",
        target: task,
        id: id,
        taskId: taskId
    }
}


export { listAdd, deleteTask }