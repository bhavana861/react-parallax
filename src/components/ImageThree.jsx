import { Parallax } from 'react-parallax';
import Space from '../assets/spaceStation.jpeg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Space} strength={200}>
        <div className="content">
            <span className='img-txt'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageThree