import { useEffect, useState } from 'react';
import { fetchData } from '../../image-api';
import { Photo } from '../../types';
import {ErrorMessage} from '../ErrorMessage/ErrorMessage';
import {ImageGallery} from '../ImageGallery/ImageGallery';
import {ImageModal} from '../ImageModal/ImageModal';
import {Loader}from '../Loader/Loader';
import {LoadMoreBtn} from '../LoadMoreBtn/LoadMoreBtn';
import {SearchBar} from '../SearchBar/SearchBar';


export default function App() {
    // стани
    const [images, setImages] = useState<Photo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [query, setQuery] = useState<string>('');
    const [modalImageData, setModalImageData] =useState<Photo[] | null>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showBtn, setShowBtn] = useState<boolean>(false);
    

    // ф-я пошуку
    const handleSearch = (newQuery: string): void => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);
    };

    // ф-я завант наст сторінки
    const handleLoadMore = (): void => {
        setPage(page+1)
    };

    // ф-я при кліку для виклику модалки
    const handleImageClick = (imageData: Photo[]): void => {
        setModalImageData(imageData);
        setIsOpen(true);}


    useEffect(() => {
        if (query ==='') {
            return
        }
    
        // запит
        async function getImages (): Promise<void> {
        try {
            setError(false);
            setIsLoading(true);
            const data = await fetchData(query, page);
            const totalPages = data.total_pages;
            setShowBtn (totalPages > page);
            setImages((prevImages) => {
                return [...prevImages, ...data.results];
            });
        } catch(error) {
            setError(true);
        } finally {
            setIsLoading(false)
        }
    }
        getImages();
    }, [page, query]);

    // ф-я для модалки
    const handleCloseModal = (): void => {
        setIsOpen(false);
        setModalImageData(null);
    };


    
    return(
        <div>
            <SearchBar onSearch = {handleSearch}/>
            {error && <ErrorMessage/>}
            {images.length > 0 && <ImageGallery items={images} onImageClick={handleImageClick}/>}
            {isLoading && <Loader/>}
            {showBtn && <LoadMoreBtn onClick ={handleLoadMore}/>}
            <ImageModal 
            onClose={handleCloseModal}
            state={isOpen}
            img={modalImageData}/>
        </div>
    )
};