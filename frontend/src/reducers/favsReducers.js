import { favs_ADD_ITEM, favs_REMOVE_ITEM } from "../constants/favsConstants";

function favsReducer(state = { favsItems: [] }, action) {
    switch (action.type) {
        case favs_ADD_ITEM:
            const item = action.payload;
            const product = state.favsItems.find(x => x.product === item.product);
            if (product) {
                return {
                    favsItems: state.favsItems.map(x => x.product === product.product ? item : x)
                }
            }
            return { favsItems: [...state.favsItems, item] }
        case favs_REMOVE_ITEM:
            return { favsItems: state.favsItems.filter(x => x.product !== action.payload) };
        default:
            return state
    }
}

export { favsReducer }