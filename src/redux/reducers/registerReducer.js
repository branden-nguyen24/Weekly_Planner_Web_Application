const INITIAL_STATE = {
    success: false,
    error: null,
}

const registerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "REGISTER_SUCCESS":
            console.log("REDUCER: REGISTER SUCCESS")
            return {
                ...state,success: true
            };
        case "REGISTER_FAILURE":
            console.log("REDUCER: REGISTER FAILURE")
            return {
                ...state, error: action.error
            }    
        case "REGISTER_LOADING":
            console.log("REDUCER: REGISTER LOADING")
            return {
                ...state, success: false, error: null
            }    
        default:
            return state;
    }
};

export default registerReducer