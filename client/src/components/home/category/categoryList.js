import React from 'react'

const CategoryList = (props) => {
  return (
    <div className="category__list">
      <div className="category__list-number">
        <div className="category__list-fig">{props.number}</div>
      </div>
      <div className="category__list-title">Your Product</div>
      <div className="category__list-time">3 minute chat</div>
    </div>
  )
}

export default CategoryList
