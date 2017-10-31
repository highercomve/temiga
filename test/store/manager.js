function combineReducers (reducers) {
  return (action, state) => {
    return Object.keys(reducers).reduce((CombineState, key) => {
      CombineState[key] = reducers[key](action, state[key])
      return CombineState
    }, {})
  }
}

function storeFactory (reducer) {
  let state = {}
  let listeners = []

  function dispatch (action) {
    state = reducer(action, state)
    listeners.forEach((listener) => {
      listener()
    })
  }

  function subscribe (callback) {
    listeners.push(callback)
    return () => {
      listeners = listeners.filter((listeners) => {
        return listeners !== callback
      })
    }
  }

  function getState () {
    return state
  }

  return {
    dispatch,
    getState,
    subscribe
  }
}

const StateManager = {
  storeFactory,
  combineReducers
}

export default StateManager
