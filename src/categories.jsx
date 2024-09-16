import React from 'react'

const Categories = ({categories}) => {
    return (
        <div className="buttons">
            {categories.map(category => {
                return (
                    <button
                        key={category}
                        onClick={()=> filterItems(category)}>{category}</button>
                )
            })}
        </div>
    )
}
export default Categories
