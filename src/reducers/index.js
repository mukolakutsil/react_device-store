
const initialState = {
    menuList: [],
    menuListLoading: true,
    menuListFault: false,

    mobiles: [],
    // mobilesLoading: true,
    // mobilesError: false,

    laptops: [],
    menuActive: "mobiles",

};



const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MENULIST_LOADED':
            return {
                ...state,
                menuList: action.payload,
                menuListLoading: false
            };

        case 'MENULIST_REQUESTED':
            return {
                ...state,
                menuListLoading: true
            };

        case 'MENULIST_ERROR':
            return {
                ...state,
                menuListFault: true,
                menuListLoading: false
            };


        case 'MOBILES_LOADED':
            return {
                ...state,
                mobiles: action.payload,
                // mobilesLoading: false
            };

        // case 'MENUITEM_REQUESTED':
        //     return {
        //         ...state,
        //         mobilesLoading: true
        //     }

        // case 'MENUITEM_ERROR':
        //     return {
        //         ...state,
        //         mobilesError: true
        //     }


        case 'LAPTOPS_LOADED':
            return {
                ...state,
                laptops: action.payload
            };

        case 'MENULIST_CLICK':
            const id = action.id;

            const stateElement = state.menuList.find(item => item.id === id);

            return {
                ...state,
                menuActive: stateElement.name
            };

        default:
            return state;
    }

}

export default Reducer;