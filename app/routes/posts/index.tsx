import { Link, useLoaderData, useParams } from 'remix'

export const loader = () => {
  const data = {
    posts: [
      { id: 1, seed: 'remix1f69', title: 'Post #1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolore maiores perspiciatis porro vel nihil aliquam! Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro? Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus. Porro, harum sunt.' },
      { id: 2, seed: 'remix2fx2', title: 'Post #2', body: 'Aperiam, dolore maiores perspiciatis porro vel nihil aliquam! Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro?' },
      { id: 3, seed: 'remix3fx5', title: 'Post #3', body: 'Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus.' },
      { id: 4, seed: 'remix4fx8', title: 'Post #4', body: 'Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro? Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus. Porro, harum sunt.' },
      { id: 5, seed: 'remix5fx9', title: 'Post #5', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolore maiores perspiciatis porro vel nihil aliquam! Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro? Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus. Porro, harum sunt.' },
      { id: 6, seed: 'remix6fx0', title: 'Post #6', body: 'Aperiam, dolore maiores perspiciatis porro vel nihil aliquam! Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro?' },
      { id: 7, seed: 'remix7fx1', title: 'Post #7', body: 'Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus.' },
      { id: 8, seed: 'remix8fx3', title: 'Post #8', body: 'Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro? Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus. Porro, harum sunt.' },
      { id: 9, seed: 'remix9fx4', title: 'Post #9', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolore maiores perspiciatis porro vel nihil aliquam! Consectetur voluptas reprehenderit esse commodi recusandae adipisci quo, excepturi eaque eum vel laboriosam magnam id porro?' },
      { id: 10, seed: 'remix10fx6', title: 'Post #10', body: 'Modi iusto fugit dolorum facere, nostrum autem eius quis dolor nulla sint quia perspiciatis repellendus.' },
    ],
  }
  return data
}

const PostItems = () => {
  const { posts } = useLoaderData()
  const params = useParams()

  return (
    <div>
      <h1 className="posts-title">Latest Posts</h1>
      <ul className="posts-list">
        {posts.map((post: { id: number, seed: string, title: string, body: string }) =>
          <Link to={`/posts/${post.id}`} key={post.id}>
            <li>
              <div className="post-image-banner">
                <img src={`https://picsum.photos/seed/${post.seed}/400/250`} alt='Banner' />
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
