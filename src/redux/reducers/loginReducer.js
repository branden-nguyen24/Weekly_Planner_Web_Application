const INITIAL_STATE = {
    username: "",
    password: "",
    name:""
}

const loginReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case "login":
            return {
                ...state,
                username: action.username,
                name: action.name, 
                password: action.password
            };
        case "logOut":
            console.log("Logging user out");
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