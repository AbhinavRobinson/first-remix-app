import { Link, LiveReload, Outlet } from 'remix'
import globalStylesUrl from '~/styles/global.css'

const App: React.FC = () => {
  return (
    <Document title='Remix Blog'>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

const Document: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href={globalStylesUrl} />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default App