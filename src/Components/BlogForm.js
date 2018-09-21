import React, { Component } from 'react'

class BlogForm extends Component {
  constructor() {
    super()

    this.state = {
      author: '',
      title: '',
      photo: '',
      facebook: '',
      twitter: '',
      instagram: '',
      body: '',
    }
  }

  onChange(e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    const payload = this.state
    payload.publishedAt = Date.now()

    fetch('http://servup.herokuapp.com/collections/blakes-blog', {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(() => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="author">Author</label>
          <input onChange={this.onChange.bind(this)} name="author" type="text" />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input onChange={this.onChange.bind(this)} name="title" type="text" />
        </div>
        <div>
          <label htmlFor="photo">Photo</label>
          <input onChange={this.onChange.bind(this)} name="photo" type="text" />
        </div>
        <div>
          <label htmlFor="twitter">Twitter</label>
          <input onChange={this.onChange.bind(this)} name="twitter" type="text" />
        </div>
        <div>
          <label htmlFor="facebook">Facebook</label>
          <input onChange={this.onChange.bind(this)} name="facebook" type="text" />
        </div>
        <div>
          <label htmlFor="instagram">Instagram</label>
          <input onChange={this.onChange.bind(this)} name="instagram" type="text" />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea onChange={this.onChange.bind(this)} name="body" id="" cols="30" rows="10"></textarea>
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Submit Blog Post</button>
      </div>
    )
  }
}

export default BlogForm
