import React from "react";

const Newsitem = (props) => {
  return (
    <div className="card bg-light my-3 ">
      <div className="position-absolute end-0 d-flex justify-content-end">
        <span className="badge rounded-pill bg-danger">
          {props.name === "[Removed]" ? "news" : props.name}
        </span>
      </div>
      <img
        src={
          !props.imageUrl
            ? "https://www.cnet.com/a/img/hub/2025/01/08/e97f2087-a0c8-40b0-8859-3c2ba6cf9d66/ces-2025-las-vegas-4457.jpg"
            : props.imageUrl
        }
        className="card-img-top"
        alt="/"
      />
      <div className="card-body">
        <h6 className="card-title">
          <strong>{props.title}</strong>{" "}
        </h6>
        <p className="card-text">
          {props.description.length > 80
            ? props.description.slice(0, 80) + "..."
            : props.description}
        </p>
        <p className="card-text">
          <small className="text-muted">
            {Math.floor((new Date() - new Date(props.date)) / (24 * 60 * 60 * 1000)) +
              " days ago"}
          </small>
        </p>
        <a
          href={props.newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-dark"
        >
          Read more
        </a>
      </div>
    </div>
  );
};
export default Newsitem;
