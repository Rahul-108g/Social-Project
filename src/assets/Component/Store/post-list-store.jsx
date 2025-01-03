import { createContext, useEffect, useReducer, useState } from "react";

export const PostlistContext = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
  fetch,
});

const postlistReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "DELETE_POSTLIST") {
    newPostList = currentPostList.filter(
      (item) => item.userId != action.payload.userid
    );
  } else if (action.type === "INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POSTLIST") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList;
};

const PostListrovider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(postlistReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (
    idElement,
    titleElement,
    contentElement,
    reactionElement,
    hastagElement
  ) => {
    dispatchPostlist({
      type: "ADD_POSTLIST",
      payload: {
        id: Math.random(),
        userId: idElement,
        title: titleElement,
        body: contentElement,
        reactions: reactionElement,
        tags: hastagElement,
      },
    });
  };

  const deletePost = (userid) => {
    dispatchPostlist({
      type: "DELETE_POSTLIST",
      payload: {
        userid,
      },
    });
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addInitialPost(data.posts);
        setFetching(false);
      })
      .catch((err) => console.log(err));

    return () => {
      console.log("clean up useffect");
      controller.abort();
    };
  }, []);

  let addInitialPost = (posts) => {
    dispatchPostlist({
      type: "INITIAL_POST",
      payload: { posts },
    });
  };

  return (
    <PostlistContext.Provider
      value={{
        postlist: postlist,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPost: addInitialPost,
        fetching: fetching,
      }}
    >
      {children}
    </PostlistContext.Provider>
  );
};

// const Default_Post_list = [
//   {
//     id: 1,
//     title: "Population",
//     body: "His mother had always taught him not to ever think of himself as better",
//     views: 2,
//     userId: 121,
//     tags: ["history", "american", "crime"],
//   },
//   {
//     id: 2,
//     title: "His mother had always taught him",
//     body: "His mother had always taught him not to ever think of himself as better",
//     views: 3,
//     userId: 122,
//     tags: ["history", "american", "crime"],
//   },
// ];

export default PostListrovider;
