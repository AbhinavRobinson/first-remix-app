import { useParams } from 'remix'

const Post = () => {
  const params = useParams()
  return (
    <div>
      <div className="img-container">
        <img src={`https://picsum.photos/seed/${params.postId}/900/320`} alt='Banner' />
      </div>
      <h1>Post #{params.postId}</h1>
    </div>
  )
}

export default Post
