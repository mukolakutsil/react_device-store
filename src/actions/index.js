const menuListLoaded = (newMenuList) => {

    return {
        type: 'MENULIST_LOADED',
        payload: newMenuList
    }

}

const menuListRequested = () => {

    return {
        type: 'MENULIST_REQUESTED',
    }

}


const menuListError = () => {

    return {
        type: 'MENULIST_ERROR',
    }

}


const mobilesLoaded = (newMobiles) => {

    return {
        type: 'MOBILES_LOADED',
        payload: newMobiles
    }

}

const laptopsLoaded = (newLaptops) => {

    return {
        type: 'LAPTOPS_LOADED',
        payload: newLaptops
    }

}

const menuListClick = (id) => {

    return {
        type: 'MENULIST_CLICK',
        id: id
    }

}

export {
    mobilesLoaded,
    laptopsLoaded,
    menuListLoaded,
    menuListClick,
    menuListError,
    menuListRequested
}