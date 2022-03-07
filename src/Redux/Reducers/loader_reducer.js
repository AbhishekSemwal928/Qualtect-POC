
export const loader_reducer = (state=false,action)=>{

    switch (action.type) {
        case 'SHOW_LOADER':
            return action.payload
            
    
        default:
            return state;
    }
}