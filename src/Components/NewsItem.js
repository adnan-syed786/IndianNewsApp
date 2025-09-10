import React, { Component } from 'react'

export default class NewsItem extends Component {
  render()
  // create props inside class like this 
  //destructuring ka concept hain javascript
  {
     let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem" }}>
          <img src={!imageUrl ?"https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/mpx/2704722219/2025_09/1756853859189_nn_ksi_afghanistan_earthquake_aftershock_250902_1920x1080-jxw6d5.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
           <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl}  className="btn btn-sm btn-dark">Read More</a>
          </div>
       </div>
      </div>
    )
  }
}


