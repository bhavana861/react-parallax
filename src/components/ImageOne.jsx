import { Parallax } from 'react-parallax';
import Nasa from '../assets/nasa.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Nasa} strength={200}>
        <div className="content">
            <span className='img-txt'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne