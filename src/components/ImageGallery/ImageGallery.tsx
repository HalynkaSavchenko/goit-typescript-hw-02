import { FC } from 'react'
import {ImageCard} from '../ImageCard/ImageCard';
import { ImageGalleryProps, ModalImage, Photo } from '../../types'
import css from './ImageGallery.module.css';

export const ImageGallery: FC<ImageGalleryProps> = ({items, onImageClick}) => {
  const handleImageClick = (image: ModalImage): void => {
        onImageClick(image);
};

    return(
        <ul className={css.gallery}>
         {items.map((item)=> (
            <li className={css.item} key={item.id}>
               <ImageCard
               onImageClick={handleImageClick}
               alt_description={item.alt_description}
               likes={item.likes}
               urls={item.urls.small}
               name={item.user.name}
               modalUrls={item.urls.regular}/>
            </li>
          ))}   
        </ul>
    )
}