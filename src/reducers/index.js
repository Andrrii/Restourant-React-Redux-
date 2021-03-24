
// REDUCER ПОВНІСТЮ ПЕРЕЗАПИСУЄ СТАТЕ

const initialState = {
    menu: [],
    loading : true,
    items:  // Динамічно створюємо
        []
}

const reducer = (state = initialState,action) => {
    console.log(state)
    switch (action.type){
        case 'MENU_LOADED':
            return {
                ...state,    // REDUCER ПОВНІСТЮ ПЕРЕЗАПИСУЄ СТАТЕ , тому треба робити так
                menu: action.payload,
                loading:false
            }
        case 'MENU_REQUESTED':
            return {
                ...state,// REDUCER ПОВНІСТЮ ПЕРЕЗАПИСУЄ СТАТЕ , тому треба робити так
                menu: state.menu,// REDUCER ПОВНІСТЮ ПЕРЕЗАПИСУЄ СТАТЕ , тому треба робити так
                loading:true
            }
        case "ITEM_ADD_TO_CARD":
            const id = action.payload
            const item = state.menu.find(item => item.id === id)
            const newItem = {
                title:item.title,
                price:item.price,
                url:item.url,
                id:item.id
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            }
        
        case "ITEM_REMOVE_FROM_CARD": {
            const idx = action.payload; // index of element
            const itemIndex = state.items.findIndex(item => item.id === idx)
            return {
                ...state,
                // Вирізаєм елемент із store.items ,яким ми видалили
                items: [
                    ...state.items.slice(0,itemIndex),
                    ...state.items.slice(itemIndex+1)
                ]
            }
        }
        
        default:
            return state
    }
}

export default reducer