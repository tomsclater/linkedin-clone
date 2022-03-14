function Post({post}) {
  return <div>
      <img src={post.userImg} alt="" />
      <p>{post.input}</p>
  </div>;
}

export default Post;