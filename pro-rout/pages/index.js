import React from 'react';
// import Layout from '../components/navBar/NavBar';
import Link from 'next/link';
// import { wrapper } from '../store';
// import { getRooms } from '../components/redux/actions/roomActions';

const IndexPage = ({posts}) => {

  return(
    <>
      <div className="products">

        <ul>
        {
          posts.map(e => 
             <>
                  
                    <li style={{listStyleType:"none", margin:"1.5rem"}} key={`Post_${e.id}`}>
                      <Link href="/posts/[id]" as={`/posts/${e.id}`}>
            
                      <a> <img src={e.image} style={{width:"7rem", height:"8rem"}} alt={e.id}/></a>
            
                      </Link>
                      
                     
                    </li>
                  
             </>
            )
        }
        </ul>
        </div>
    </>
  )
}

export default IndexPage;

IndexPage.getInitialProps = async () => {

  const res = await fetch('https://fakestoreapi.com/products')
  const posts =await res.json();
  return {posts}
}

// export const getServerSideProps =wrapper.getServerSideProps(async ({req, store})=> {
//    await store.dispatch(getRooms(req))
//  }
// )