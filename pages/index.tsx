import axios from 'axios';
import Navbar from '../components/Navbar';
import NoResults from '../components/NoResults';
import ImageCard from '../components/ImageCard';
import {ImagePost} from '../types';

// interface IProps {
//   images: ImagePost[]
// }
const Home = ({ image } ) => {
  console.log(image);
  // if (!images || !Array.isArray(images)) {
  //   return <div>No images found.</div>; // Show a fallback message
  // }
  return (
    // <div className='flex flex-col gap-10 images h-full'>
    //   {images.length > 0 ? (
    //      images.map((image: ImagePost) => (
    //       <ImageCard post={image} key={image._id} />
    //     ))
    //   ) 
    //     : <NoResults text={`No Images`} />}
    // </div>
    <h1>Hello</h1>
  )
}

export const getServerSideProps = async()=>{
  const { data } = await axios.get('http://localhost:3000/api/post');
  return {
    props: {}
  }
}

export default Home
