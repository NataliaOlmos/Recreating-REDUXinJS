const createStore = (reducer, initialState) => {
    let state = initialState
    let updater = () => { }
    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        updater()
    }

    const subscribe = (listener) => {
        updater = listener
    }


    return {
        getState,
        dispatch,
        subscribe
    }
}

const reducer = (state, action) => {
    return action
}


const store = createStore(reducer, "Estado Inicial de la aplicación")
//store.dispatch()
//store.getState()
//store.subscribe()

store.subscribe(() => {
    console.log("Ha cambiado algo en el store", store.getState())
})

store.dispatch("voy a modificar algo")

