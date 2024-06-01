import css from './ImageCard.module.css';
import { ImageCardProps } from '../../types';
import { FC } from 'react';

export const ImageCard: FC<ImageCardProps> = ({
    onImageClick,
    alt_description,
    likes,
    urls,
    name,
    modalUrls
}) => {
    const handleClick = (): void => {
       
        onImageClick({
            modalUrl: modalUrls,
            alt_description
        });
    };
    return(
        <div>
            <div>
                <img src={urls} alt={alt_description} onClick={handleClick} />
            </div>
            <div>
                <ul className={css.list}>
                    <li className={css.item}>Author name: <span>{name}</span></li>
                    <li className={css.item}>Likes: <span>{likes}</span></li>
                </ul>
            </div>
        </div>
    )
}