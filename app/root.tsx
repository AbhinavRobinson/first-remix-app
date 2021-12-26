import { Link, Links, LiveReload, Meta, Outlet } from 'remix'
import globalStylesUrl from '~/styles/global.css'

// Add Links and Meta to the global scope
export const links = () => [{ rel: 'stylesheet', href: globalStylesUrl }]
export const meta = () => {
  const description = 'A simple remix blog'
  const keywords = 'remix, blog, typescript, react'
  const viewport = 'width=device-width, initial-scale=1'
  const charset = 'utf-8'
  return {
    description, keywords, viewport, charset
  }
}

// App root component
const App: React.FC = () => {
  return (
    <Document title='Remix Blog'>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

// App document component
const Document: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <Links />
        <Meta />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

// App Layout component
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <Link to='/' className='logo'>
            Remix
          </Link>
          <ul className="nav">
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default App