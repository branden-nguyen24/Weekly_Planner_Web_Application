const INITIAL_STATE = {
    success: false,
    error: null,
}

const saveReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SAVE_SUCCESS":
            console.log("REDUCER: SAVE SUCCESS")
            return {
                ...state,success: true
            };
        case "SAVE_FAILURE":
            console.log("REDUCER: SAVE FAILURE")
            return {
                ...state, error: action.error
            }    
        case "SAVE_LOADING":
            console.log("REDUCER: SAVE LOADING")
            return {
                ...state, success: false, error: null
            }    
        default:
            return state;
    }
};

export default saveReducer