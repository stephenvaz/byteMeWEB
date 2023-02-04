import { Parallax } from 'react-parallax';
import NavB from '../navbar';
import BootstrapCarousel from '../darkcar';
import im1 from '../images/img5.jpg'
import './imgOne.css'
import Tile from '../tile';


const ImageOne = () => (
    <Parallax className='image' bgImage={im1} strength={800}>
       <div className='content'>
       <NavB />
       <Tile />
       </div>
    </Parallax>
)

export default ImageOne