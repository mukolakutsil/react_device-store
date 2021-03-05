import React from 'react';

import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>

            <div className={style.conteiner}>
                <h1 className={style.text}>
                    <a href="https://google.com">Cool_Shop</a></h1>


                <div className={style.cart}>Cart</div>
            </div>
        </header>


    )
}

export default Header;