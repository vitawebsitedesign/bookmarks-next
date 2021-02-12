import GalleryTileCaption from './GalleryTileCaption';
import './GalleryTile.css';
import {NavLink} from 'react-router-dom';

const playVideo = (event) => {
    const video = event.currentTarget.querySelector('.gallery-tile--video');
    video.play();  

    const caption = event.currentTarget.querySelector('.caption');
    caption.classList.add('active');
};

const resetVideo = (event) => {
    const video = event.currentTarget.querySelector('.gallery-tile--video');
    video.pause();
    video.currentTime = 0;

    const caption = event.currentTarget.querySelector('.caption');
    caption.classList.remove('active');
};

const GalleryTile = props => {
    return (
        <NavLink to={'/exhibit/' + props.exhibitId} onMouseEnter={playVideo} onMouseLeave={resetVideo} className={props.className + ' position-relative gallery-tile'}>
            <GalleryTileCaption captionTitle={props.captionTitle} className="text-small" />
            <video className="gallery-tile--video" muted loop>
                <source src={`vid/${props.thumbnails.webm}`} type="video/webm" />
                <source src={`vid/${props.thumbnails.mp4}`} type="video/mp4" />
            </video>
        </NavLink>
    );
};

export default GalleryTile;
