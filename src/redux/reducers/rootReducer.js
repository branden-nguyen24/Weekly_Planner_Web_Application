import { combineReducers } from "redux"
import addDeleteReducer from './addDeleteReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    addDelete: addDeleteReducer,
    login: loginReducer,
})

// export default addDeleteReducer