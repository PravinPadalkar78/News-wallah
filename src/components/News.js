import React, { useState,useEffect } from 'react'
import Spinner from './Spinner';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News= (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

    // document.title=`${props.category}-PandaNews`


 const upadateNews=async()=>{
  props.setProgress(10) 
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    props.setProgress(30) 
    setLoading(true)
      props.setProgress(70) 
        fetch(url).then((res)=>res.json()).then((parseData)=>{
          setArticles(parseData.articles)
          setTotalResults(parseData.totalResults)
          setLoading(false)
        })  
        props.setProgress(100)
       
         
  }
    useEffect(() => {
      upadateNews();
     // eslint-disable-next-line 
    }, []);
  
  //  const handlePreClick= async()=>{
  //   setPage(page-1)
  //        upadateNews()     
  //   };
  //   const handleNextClick =async()=>{ 
  //     setPage(page+1)
  //        upadateNews()  
  //   };
   const fetchMoreData= async()=>{
      const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
      setPage(page+1)
      await fetch(url).then((res)=>res.json()).then((parseData)=>{
            setArticles(articles.concat(parseData.articles))
            setTotalResults(parseData.totalResults)
          
      })

    }
    return (
      
      <div className='container my-3'>
         <h2 className='text-center' style={{margin:'30px 0px',marginTop: '90px'}}>PandaNews -Top {props.category} Headlines</h2>
         <InfiniteScroll style={{overflow:'hidden'}}
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
          <div className="container">
          <div className='row'>  
          {!loading && articles.map((element)=>{ 
            return <div className="col-md-4" key={element.url} >
                <Newsitem title={element.title} Description={element.description} imgUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/> 
                </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes ={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string

}
export default News