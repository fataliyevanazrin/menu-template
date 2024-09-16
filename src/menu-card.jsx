import React from 'react'

const MenuCard = ({title, img, price, desc}) => {
    return (
        <div className="menu-card">
            <img src={img} alt={title}/>
            <div className="header">
                <h3>{title}</h3>
                <h4>${price}</h4>
            </div>
            <p>{desc}</p>
        </div>
    )
}
export default MenuCard
