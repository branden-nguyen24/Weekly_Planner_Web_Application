const login = (username,name,password) => {
    return {
        type: "login",
        username: username,
        password: password,
        name:name
    }
}

const logOut = () => {
    return { 
        type: "logOut"
    }
}

export {login, logOut};