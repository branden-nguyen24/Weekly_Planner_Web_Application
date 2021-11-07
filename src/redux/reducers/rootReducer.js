import { combineReducers } from "redux"
import addDeleteReducer from './addDeleteReducer'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import saveReducer from './saveReducer'

export default combineReducers({
    addDelete: addDeleteReducer,
    login: loginReducer,
    register: registerReducer,
    save: saveReducer
})

// export default addDeleteReducer