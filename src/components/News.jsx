import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [article, setArticle] = useState([]);
  const [size, setSize] = useState(0);
  const [number, setNumber] = useState(0);
  const [page, setPage] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchMoreData = async () => {
    setPage(page);
    let url = `https://newsdata.io/api/1/news?country=${props.country}&apikey=pub_16084e8fda7f166e8de063c25e33365407139&category=${props.category}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setLoading(false);
    setArticle(article.concat(parsedData.results));
    setSize(parsedData.results.length + size);
    setPage(parsedData.nextPage);
  };
  async function getData() {
    props.showProgress(20);
    let url = `https://newsdata.io/api/1/news?country=${props.country}&apikey=pub_16084e8fda7f166e8de063c25e33365407139&category=${props.category}`;
    props.showProgress(60);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.showProgress(100);
    console.log(parsedData);
    setLoading(false);
    setArticle(parsedData.results);
    setSize(parsedData.results.length);
    setNumber(parsedData.totalResults);
    setPage(parsedData.nextPage);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "gray" }}>
      <h2 className="text-center py-4">{props.heading}</h2>
      <InfiniteScroll
        dataLength={article.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={size < number}
        loader={<Spinner />}
      >
        {article.length>0?<div className="row mx-3">
          <div className="container">{article.length>0 && loading && <Spinner />}</div>
          {article?.map((element) => {
            return (
              <div className="col-md-3 mb-4" key={element.link}>
                <Newsitem
                  title={
                    !element.title ? "" : element.title.slice(0, 25) + " ..."
                  }
                  description={
                    !element.description
                      ? ""
                      : element.description.slice(0, 50) + " ..."
                  }
                  image={!element.image_url ? "india.jpg" : element.image_url}
                  link={element.link}
                />
              </div>
            );
          })}
        </div>:
        <div style={{textAlign:"center",fontSize:"20px"}}>Maximum Call Limit Exceeded for the Dummy API</div>}
      </InfiniteScroll>
    </div>
  );
}
