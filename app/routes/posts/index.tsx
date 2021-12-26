import { Link, useLoaderData, useParams } from 'remix'

export const loader = () => {
  const data = {
    posts: [
      { id: 1, seed: 'remix1fx', title: 'Post #1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolore maiores perspiciatis porro vel nihil aliquam! Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro? Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus. Porro, harum sunt.' },
      { id: 2, seed: 'remix2fx', title: 'Post #2', body: 'Aperiam, dolore maiores perspiciatis porro vel nihil aliquam! Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro?' },
      { id: 3, seed: 'remix3fx', title: 'Post #3', body: 'Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus.' },
      { id: 4, seed: 'remix4', title: 'Post #4', body: 'Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro? Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus. Porro, harum sunt.' },
    ],
  }
  return data
}

const PostItems = () => {
  const { posts } = useLoaderData()
  const params = useParams()

  return (
    <div>
      <div className="img-container">
        <img src='https://picsum.photos/seed/seafx/900/320' alt='Banner' />
      </div>
      <h1 className="posts-title">Latest Posts</h1>
      <ul className="posts-list">
        {posts.map((post: { id: number, seed: string, title: string, body: string }) =>
          <Link to={`/posts/${post.id}`}>
            <li key={post.id}>
              <div className="post-image-banner">
                <img src={`https://picsum.photos/seed/${post.seed}/400`} alt='Banner' />
              </div>
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 33)} ...</p>
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default PostItems
