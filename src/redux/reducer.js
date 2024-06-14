const initialState = {
    title: 0
}

export default function reducer(state = initialState, action){

    switch (action.type){
        case  "TEN":
            return {
                ...state,
                title: state.title +10

            }
        case "-TEN":
            return {
                ...state,
                title: Math.max(state.title - 10, 0)
            }
        case "ONE":
            return {
                ...state,
                title: state.title +1

            }
        case "-ONE":
            return {
                ...state,
                title: Math.max(state.title - 1, 0)
            }
        case "RESET":
            return {
                ...state,
                title: 0
            }

    }

    return state;
}