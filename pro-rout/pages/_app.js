import '../styles/globals.css'
import Layout from '../components/navBar/NavBar'
function MyApp({ Component, pageProps }) {

  
  return (
    <>
         <Layout>
         <Component {...pageProps} />
         </Layout>
    </>
  )
}

export default MyApp

// export default wrapper.withRedux(MyApp)