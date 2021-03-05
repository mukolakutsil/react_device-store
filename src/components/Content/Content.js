import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithServiceContext from '../hoc/With-shop-service';
import { menuLoaded } from '../../actions/'

import style from './Content.module.css';

class Content extends Component {

    componentDidMount() {
        const { ShopService } = this.props;

        ShopService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className={style.content}>
                <div className={style.container}>
                    <div className={style.menuList}>
                        <ul>
                            <li>dwadwaawddawdwa</li>
                            <li>dwadwaawddawdwa</li>
                            <li>dwadwaawddawdwa</li>
                            <li>dwadwaawddawdwa</li>
                            <li>dwadwaawddawdwa</li>
                            <li>dwadwaawddawdwa</li>
                            <li>dwadwaawddawdwa</li>
                            <li>dwadwaawddawdwa</li>
                            <li>dwadwaawddawdwa</li>
                        </ul>
                    </div>
                    <div className={style.items}>

                        {this.props.menu.map(item => {
                            return (
                                <div key={item.id} className={style.item}>
                                    <img alt={item.title} src={item.url} />
                                    <span className={style.title}>{item.title}</span>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}

const mapDispatchToProps = {
    menuLoaded
}

export default WithServiceContext()(connect(mapStateToProps, mapDispatchToProps)(Content));

