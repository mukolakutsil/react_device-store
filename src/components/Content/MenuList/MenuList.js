import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithServiceContext from '../../hoc/With-shop-service';
import { menuListLoaded, menuListClick, menuListRequested, menuListError } from '../../../actions/'


import style from './MenuList.module.css';
import Spinner from '../../Spinner/Spinner';
import Error from '../../Error/Error';

class MenuList extends Component {

    componentDidMount() {
        const { ShopService, menuListError, menuListLoaded } = this.props;

        this.props.menuListRequested();

        ShopService.getMenuList()
            .then(res => menuListLoaded(res))
            .catch(() => { menuListError() })
    }

    render() {

        const { menuList, menuListClick, menuListLoading, menuListFault } = this.props;

        let elements = menuList.map(item => {
            return (
                <li key={item.id} >
                    <span onClick={
                        () => {
                            menuListClick(item.id)
                        }
                    }>
                        {item.text}
                    </span>
                </li>
            )
        })

        if (menuListFault) {
            return (
                <div className={style.menuList} >
                    <ul>
                        <Error errorImg={1} />
                    </ul>
                </div>
            )
        }

        if (menuListLoading) {
            return (
                <div className={style.menuList} >
                    <ul>
                        <Spinner />
                    </ul>
                </div>
            )
        }

        return (
            <div className={style.menuList} >
                <ul>
                    {elements}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuList: state.menuList,
        menuListLoading: state.menuListLoading,
        menuListFault: state.menuListFault
    }
}

const mapDispatchToProps = {
    menuListLoaded,
    menuListClick,
    menuListRequested,
    menuListError
}

export default WithServiceContext()(connect(mapStateToProps, mapDispatchToProps)(MenuList));