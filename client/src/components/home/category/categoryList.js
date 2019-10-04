import React from 'react'

const CategoryList = (props) => {
  console.log(props)
  return (
    <div className="category__list">
      <div className="category__list-number">
        <div className="category__list-fig">{props.number}</div>
      </div>
      <div className="category__list-title">{props.category.name}</div>
      <div className="category__list-time">
        {props.category.duration} minute chat
      </div>
    </div>
  )
}

export default CategoryList
