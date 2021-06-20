const initialState =[];
const cardReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case "CARD_IMAGE": return  {...state,
            a:action.payload,}
      
        
        default: return state;
    }
}
export default cardReducer;