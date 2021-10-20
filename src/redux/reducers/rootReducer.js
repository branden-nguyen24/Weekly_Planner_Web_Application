import { combineReducers } from "redux"
import addDeleteReducer from './addDeleteReducer'

export default combineReducers({
    addDelete: addDeleteReducer
})

// export default addDeleteReducer