const INITIAL_STATE = {
    username: "",
    password: "",
    name:""
}

const loginReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                username: action.username,
                name: action.name, 
                password: action.password
            };
        case "LOGOUT":
            console.log("REDUCER: LOG OUT");
            return {
                ...state,
                username: "",
                name:"",
                password: ""
            }    
        default:
            return state;
    }
}

export default loginReducer