import React from 'react';

import style from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__row}>
                <div className={style.footer__text}>
                    Mykola_Kutsil
                </div>
                <div className={style.footer__text}>
                    Cool Shops
                </div>
                <div className={style.footer__text}>
                    React
                </div>
            </div>
        </footer>
    )
}

export default Footer;
