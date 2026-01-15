import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchNews = async (pageNo) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${pageNo}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    return parsedData;
  };

  useEffect(() => {
    document.title =
      props.category.charAt(0).toUpperCase() + props.category.slice(1);

    const loadInitialNews = async () => {
      props.setprogress(10);
      setLoading(true);
      const data = await fetchNews(1);
      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
      setLoading(false);
      props.setprogress(100);
    };

    loadInitialNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage((prevPage) => prevPage + 1);

    const nextPage = page + 1;
    const data = await fetchNews(nextPage);

    setArticles((prev) => prev.concat(data.articles || []));
    setTotalResults(data.totalResults || 0);
  };

  return (
    <>
      <div style={{ marginTop: "65px" }}>
        <h1 className="text-center">
          <strong>Real news in real time.</strong>
        </h1>
        <h3 className="text-center mb-4 text-dark">
          <strong>
            Top headlines{" "}
            {props.category === "general" ? "" : "- " + props.category}
          </strong>
        </h3>
      </div>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((e) => (
              <div key={e.url} className="col-md-4">
                <Newsitem
                  title={e.title || ""}
                  description={e.description || ""}
                  imageUrl={e.urlToImage}
                  newsUrl={e.url}
                  date={e.publishedAt}
                  name={e.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setprogress: PropTypes.func.isRequired,
};

export default News;
