import { Link, useLoaderData } from 'remix'

export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: 'Post #1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolore maiores perspiciatis porro vel nihil aliquam! Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro? Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus. Porro, harum sunt.' },
      { id: 2, title: 'Post #2', body: 'Aperiam, dolore maiores perspiciatis porro vel nihil aliquam! Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro?' },
      { id: 3, title: 'Post #3', body: 'Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus.' },
      { id: 4, title: 'Post #4', body: 'Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro? Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus. Porro, harum sunt.' },
    ],
  }
  return data
}

const PostItems = () => {
  const { posts } = useLoaderData()

  return (
    <div>
      <h1>Posts</h1>
      <ul className="posts-list">
        {posts.map((post: { id: number, title: string, body: string }) =>
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <p>{post.body.substring(0, 33)} ...</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default PostItems
