import React from 'react';
import './menu-list-item.scss';

<<<<<<< HEAD
const MenuListItem = ({menuItem,onAddToCard}) => {
=======
const MenuListItem = ({menuItem}) => {
>>>>>>> 8c593d1d6a6039a030f6c3bc3219de8872bd14a6
    const {title,price,url,category} = menuItem
    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url}  alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
<<<<<<< HEAD
                <button onClick = {() => onAddToCard()} className="menu__btn">Add to cart</button>
=======
                <button className="menu__btn">Add to cart</button>
>>>>>>> 8c593d1d6a6039a030f6c3bc3219de8872bd14a6
            </li>
    )
}

export default MenuListItem;