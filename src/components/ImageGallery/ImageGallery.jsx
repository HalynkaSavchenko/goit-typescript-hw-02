import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

export default function ImageGallery({items, onImageClick}) {
  const handleImageClick = (image) => {
    if (onImageClick) {
        onImageClick(image);
    }
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