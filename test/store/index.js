import StateManager from './manager'
import taskReducer from './task.reducer'

let combinedReducer = StateManager.combineReducers({
  todos: taskReducer
})
let store = StateManager.storeFactory(combinedReducer)

export default store
