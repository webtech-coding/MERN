import React, { Component } from 'react'

import CategoryList from './categoryList'

class Category extends Component {
  renderCategoryList() {
    const template = []
    for (var i = 0; i < 10; i++) {
      template.push(<CategoryList key={i} number={i + 1} />)
    }

    return template
  }
  render() {
    return <div className="category">{this.renderCategoryList()}</div>
  }
}

export default Category
