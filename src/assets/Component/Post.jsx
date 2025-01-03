import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostlistContext } from "./Store/post-list-store";

const Post = ({ val }) => {
  const { deletePost } = useContext(PostlistContext);
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="card img-fluid bg-secondary mx-auto my-5"
        style={{ width: "1000px" }}
      >
        <div className="card-body ">
          <h5 className="card-title">
            {val.title}
            <span
              onClick={() => deletePost(val.userId)}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {" "}
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{val.body}</p>
          <a className="btn btn-primary me-2">Views : {val.views}</a>
          <a className="btn btn-primary me-2">userId : {val.userId}</a>

          {val.tags.map((tag) => (
            <span key={tag} className="badge text-bg-danger hastag me-1">
              {tag}
            </span>
          ))}
          <br />
        </div>
      </div>
    </>
  );
};
export default Post;
