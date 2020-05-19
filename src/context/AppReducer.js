export default (state, action) => {
    switch(action.type) {
        case 'UPDATE_ALLPRODUCTS':
            return {
               ...state,
               language: 'FR' 
            }
        default:
            return state;
    }
}