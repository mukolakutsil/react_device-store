import React from 'react';


import style from './ContentItems.module.css';


const ContentItems = ({ items }) => {

    return (

        <>
            { items.map(item => {
                return (
                    <div key={item.id} className={style.item}>
                        <img className={style.itemPic} alt={item.title} src={item.url} />
                        <span className={style.title}>{item.title}</span>
                        <div className={style.price_cart}>

                            <span className={style.price} >
                                {item.price}
                            </span>

                            <img alt={item.title} className={style.cartPic} src="https://cdn.icon-icons.com/icons2/259/PNG/128/ic_add_shopping_cart_128_28122.png" />

                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ContentItems;