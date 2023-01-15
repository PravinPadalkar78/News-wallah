import React from 'react'
const Newsitem=(props)=>{
    let {title,Description,imgUrl,url,author,date,source} = props;
    return (  
    <div>
        <div className="card">
        <div className="container">
          <span  className="badge rounded-pill bg-success " style={{position: 'absolute',
          display: 'flex',
          justifyContent: 'flex-end',
          right: '0'}}>{source}</span>
        </div>
        <img src={!imgUrl?"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc=":imgUrl} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{Description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target="_black" className="btn btn-sm btn-dark">Read More</a>
      </div>
</div>
          
    </div>
    )
}

export default Newsitem