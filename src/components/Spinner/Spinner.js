import React from 'react';

import style from './Spinner.module.css';

import srcc from './Magnify.svg';


const Spinner = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={srcc} alt="loading..." />
        </div>
    )
}
export default Spinner;