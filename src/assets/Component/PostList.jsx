import { useContext } from "react";
import Post from "./Post";
import { PostlistContext } from "./Store/post-list-store";
import Message from "./Message";
import Loading from "./Loading";

const PostList = () => {
  const { postlist, fetching } = useContext(PostlistContext);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postlist.length == 0 && <Message />}
      {!fetching && postlist.map((val) => <Post key={val.id} val={val} />)}
    </>
  );
};
export default PostList;
