import axios from 'axios'


const saveWeek = (username,week) => async (dispatch) => {
    dispatch({
        type:"SAVE_LOADING"
    })
    try {
        const response = await axios.post("/api/save",{username, week})
        if(response.data) {
            dispatch({
                type: "SAVE_SUCCESS"
            })
        } else {
            dispatch({
                type: "SAVE_FAILURE",
                error: "saving went wrong"
            })
        }
    }
    catch (error) {
        dispatch({
            type: "SAVE_FAILURE",
            error: error
        })
    }
}

export default saveWeek