const Home: React.FC = () => {
  return (
    <>
      <div className="img-container">
        <img src='https://picsum.photos/seed/red/900/320' alt='Banner' />
      </div>
      <h1>Welcome to Remix!</h1>
      <p>
        This is a simple blog built with <a href='https://remix.run'>Remix</a>. It's a
        single page application, so you can navigate to any page by clicking on the
        corresponding link in the navigation bar. You can also navigate to any page
        by typing the URL in the address bar. The blog is powered by <a href='https://typescript.com'>Typescript </a>
        and <a href='https://reactjs.org'>React</a>.
      </p>
    </>
  )
}

export default Home
