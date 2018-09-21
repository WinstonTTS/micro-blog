import React, { Component } from 'react'
import moment from 'moment'

import './BlogList.css'

class BlogItem extends Component {
  render() {
    const { blogPost } = this.props

    return (
      <div className="blogPost">
        <h2>
          {blogPost.title}
        </h2>
        <img src={blogPost.photo} alt=""/>
        <div>
          {blogPost.author}
        </div>
        <div>
          Published: {moment(blogPost.publishedAt).format('MMMM Do YYYY')}
        </div>
        <p>
          {blogPost.body}
        </p>
        <div className="socialMedia">
          <a href={`https://www.instagram.com/${blogPost.instagram}`}>
            <img src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="" />
          </a>
          <a href={`https://www.facebook.com/${blogPost.facebook}`}>
            <img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="" />
          </a>
          <a href={`https://www.twitter.com/${blogPost.twitter}`}>
            <img src="https://image.flaticon.com/icons/svg/145/145812.svg" alt="" />
          </a>
        </div>
      </div>
    )
  }
}

class BlogList extends Component {
  constructor() {
    super()

    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    fetch('http://servup.herokuapp.com/collections/blakes-blog')
      .then(blob => blob.json())
      .then(data => {
        this.setState({ blogPosts: data })
      })
  }

  render() {
    return (
      <div>
        {this.state.blogPosts.map((blogPost) => {
          return <BlogItem key={blogPost._id} blogPost={blogPost} />
        })}
      </div>
    )
  }
}

export default BlogList
