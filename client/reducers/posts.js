export default function posts(state = [], action){
    switch(action.type){
        case 'INCREMENT_LIKES':
            const index = action.index;
          
            let newState = [...state];
            newState[index] = {...state[index], likes: state[index].likes + 1}
            return newState;
        default: 
            return state;

    }
}