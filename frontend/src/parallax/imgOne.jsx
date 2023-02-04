import { Parallax } from 'react-parallax';
import NavB from '../navbar';
import BootstrapCarousel from '../darkcar';
import im1 from '../images/img1.jpg'
import './imgOne.css'



const ImageOne = () => (
    <Parallax className='image' bgImage={im1} strength={800}>
       <div className='content'>
       <NavB />
       <BootstrapCarousel />
       </div>
    </Parallax>
)

export default ImageOne