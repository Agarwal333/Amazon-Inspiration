//reducer is actually how we are going to dispatch the data 

export const initialState = {
    basket : [], 
    user: null,
}


//selector  , use the reduce() function from ES6 to get total value
export const getBasketTotal = (basket)=>
    basket?.reduce((amount, item)=> item.price + amount, 0);



const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(`Can't find ${action.id}`)
            }
            return{
                ...state,
                basket: newBasket,
            }

        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        

        default:
            return state;
    }
}

export default reducer;