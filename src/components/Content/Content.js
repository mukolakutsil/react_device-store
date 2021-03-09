import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithServiceContext from '../hoc/With-shop-service';
import { mobilesLoaded, laptopsLoaded } from '../../actions/'

import style from './Content.module.css';
import MenuList from './MenuList/MenuList';
import ContentItems from './ContentItems/ContentItems';
// import Spinner from '../Spinner/Spinner';
// import Error from '../Error/Error';

class Content extends Component {


    // state = {
    //     loading: true,
    //     error: false
    // }

    componentDidMount() {
        // this.setState({
        //     loading: true,
        //     error: false
        // })

        const { ShopService, mobilesLoaded, laptopsLoaded } = this.props;

        ShopService.getMobiles()
            .then(res => { mobilesLoaded(res) })
            .catch(error => { console.log(error) });
        ShopService.getLaptops()
            .then(res => { laptopsLoaded(res) })
            .catch(error => { console.log(error) });

    }

    // componentDidUpdate() {
    //     const { ShopService, mobilesLoaded, laptopsLoaded, menuActive } = this.props;

    //     if (menuActive === "mobiles") {
    //         ShopService.getMobiles()
    //             .then(res => {
    //                 mobilesLoaded(res)
    //                 this.setState({
    //                     loading: false,
    //                 })
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //                 this.setState({
    //                     error: true
    //                 })
    //             });
    //     } else if (menuActive === "laptops") {
    //         ShopService.getLaptops()
    //             .then(res => {
    //                 laptopsLoaded(res)
    //                 this.setState({
    //                     loading: false
    //                 })
    //             })
    //             .catch(() => {
    //                 this.setState({
    //                     error: true
    //                 })
    //             });

    //     }
    // }

    render() {

        const { mobiles, laptops, menuActive } = this.props;

        let property;

        if (menuActive === "mobiles") {
            property = mobiles;
        } else if (menuActive === "laptops") {
            property = laptops;

        }

        // if (this.state.error) {
        //     // this.setState({
        //     //     error: true
        //     // })

        //     return (
        //         <div className={style.content}>
        //             <div className={style.container}>
        //                 <MenuList />
        //                 <div className={style.items}>

        //                     <Error errorImg={2} />


        //                 </div>
        //             </div>
        //         </div>
        //     )
        // };


        return (
            <div className={style.content}>
                <div className={style.container}>
                    <MenuList />
                    <div className={style.items}>

                        <ContentItems items={property} />

                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        mobiles: state.mobiles,
        laptops: state.laptops,
        menuActive: state.menuActive
    }
}

const mapDispatchToProps = {
    mobilesLoaded,
    laptopsLoaded
}

export default WithServiceContext()(connect(mapStateToProps, mapDispatchToProps)(Content));

