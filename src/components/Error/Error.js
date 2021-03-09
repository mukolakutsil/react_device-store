import React from 'react';

import style from './Error.module.css';

import error1 from './images/error1.png';
import error2 from './images/error2.png';



const Error = ({ errorImg }) => {


    if (errorImg === 1) {

        return (
            <div className={style.wrapper}>
                <img src={error1} alt="Error(" />
            </div>
        )

    } else if (errorImg === 2) {
        return (
            <div className={style.wrapper}>
                <img src={error2} alt='Error(' />
            </div>
        )
    } else {
        return (
            <div className={style.wrapper}>
                <p>errorImg === 1 || errorImg === 2</p>
            </div>
        )
    }
}
export default Error;