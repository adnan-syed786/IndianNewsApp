import React, { Component } from 'react'

export default class NewsItem extends Component {
  render()
  // create props inside class like this 
  //destructuring ka concept hain javascript
  {
     let {title,description,imageUrl,newsUrl,author,date,sources}=this.props;   
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-5 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zindex:'1'}}>{sources}</span>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
           <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p> 
            <a href={newsUrl}  className="btn btn-sm btn-dark">Read More</a>
          </div>
       </div>
      </div>
    )
  }
}


