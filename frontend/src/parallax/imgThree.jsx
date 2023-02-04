import { Parallax } from 'react-parallax';
import NavB from '../navbar';
import BootstrapCarousel from '../darkcar';
import im1 from '../images/img5.jpg'


const ImageOne = () => (
    <Parallax bgImage={im1} strength={800}>
        <NavB />
        <BootstrapCarousel />
    </Parallax>
)

export default ImageOne