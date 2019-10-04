import React, { Component } from 'react'
import { connect } from 'react-redux'

import CategoryList from './categoryList'
import Spinner from './../../utility/spinner'
import { fetchAllCategories } from './../../../redux/actions/categoryAction'

class Category extends Component {
  constructor() {
    super()
    this.state = { loading: true }
  }

  async componentDidMount() {
    await this.props.dispatch(fetchAllCategories())
    if (this.props.categories) {
      this.setState({
        loading: false
      })
    }
  }

  renderCategoryList() {
    if (this.props.categories) {
      const data = this.props.categories.data.categories
      return data.map((el, index) => {
        return <CategoryList key={el._id} number={index + 1} category={el} />
      })
    }
  }
  render() {
    if (this.state.loading) {
      return <Spinner />
    } else {
      return <div className="category">{this.renderCategoryList()}</div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps)(Category)
