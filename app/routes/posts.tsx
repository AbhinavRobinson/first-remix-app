import { Outlet } from 'remix'

const Posts = () => {
  return (
    <div>
      <div className="img-container">
        <img src='https://picsum.photos/seed/becurious8/900/320' alt='Banner' />
      </div>
      <Outlet />
    </div>
  )
}

export default Posts
