import { useContext, useRef } from "react";
import { PostlistContext } from "./Store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostlistContext);
  const navigate = useNavigate();

  const useridElement = useRef();
  const usertitleElement = useRef();
  const postcontentElement = useRef();
  const userreactionElement = useRef();
  const userhastagElement = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const idElement = useridElement.current.value;
    const titleElement = usertitleElement.current.value;
    const contentElement = postcontentElement.current.value;
    const reactionElement = userreactionElement.current.value.split(" ");
    const hastagElement = userhastagElement.current.value.split(" ");
    addPost(
      idElement,
      titleElement,
      contentElement,
      reactionElement,
      hastagElement
    );
    useridElement.current.value = "";
    usertitleElement.current.value = "";
    postcontentElement.current.value = "";
    userreactionElement.current.value = "";
    userhastagElement.current.value = "";
    navigate("/");
  };

  //reaction and views same

  return (
    <>
      <div className="container mt-4">
        <form
          className="create-post"
          onSubmit={(event) => submitHandler(event)}
        >
          {/* user id */}
          <div className="mb-3">
            <label htmlFor="useid" className="form-label">
              Enter Your User id
            </label>
            <input
              ref={useridElement}
              placeholder="Your User Id"
              type="text"
              className="form-control"
              id="userId"
              aria-describedby="emailHelp"
            />
          </div>
          {/* post title from bootstrap login apge */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post title
            </label>
            <input
              ref={usertitleElement}
              placeholder="how are felling today...."
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          {/* body */}
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Post Content
            </label>
            <textarea
              ref={postcontentElement}
              rows={4}
              placeholder="tell us more about it"
              type="text"
              className="form-control"
              id="body"
              aria-describedby="emailHelp"
            />
          </div>

          {/* reaction */}
          <div className="mb-3">
            <label htmlFor="reaction" className="form-label">
              Number of views
            </label>
            <input
              ref={userreactionElement}
              placeholder="how are many pepole reacted this pist"
              type="text"
              className="form-control"
              id="reaction"
              aria-describedby="emailHelp"
            />
          </div>
          {/* tags */}
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Enter your Hastags here
            </label>
            <input
              ref={userhastagElement}
              placeholder="Please enter your tag using Space."
              type="text"
              className="form-control"
              id="tags"
              aria-describedby="emailHelp"
            />
          </div>

          {/* submit button */}
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
    </>
  );
};
export default CreatePost;
