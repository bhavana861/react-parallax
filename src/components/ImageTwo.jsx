import { Parallax } from 'react-parallax';
import Satellite from '../assets/satellite.jpeg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Satellite} strength={200}>
        <div className="content">
            <span className='img-txt'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageTwo