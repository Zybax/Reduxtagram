function postComments(state = [], action){
    switch (action.type){
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment,

            }]
       
        case 'REMOVE_COMMENT':
            // we need to return the new state without the deleted comment
            return [
                // from the start to the one we want to delete
                ...state.slice(0,action.index),
                // after the deleted one, to the end
                ...state.slice(action.index + 1)
            ]

        default:
            return state;
    }
    return state
}


export default function comments(state = [], action){
    if(typeof action.postId !== undefined && action.comment !== null && action.author !== null ){
        return {
            ...state,
            // overwrite this post witha new one
            [action.postId]: postComments( state[action.postId], action )
        }
    }

    return state;
}