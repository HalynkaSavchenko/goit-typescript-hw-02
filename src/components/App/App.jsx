import { useEffect, useState } from 'react';
import { fetchData } from '../../image-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';


export default function App() {
    // стани
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [modalImageData, setModalImageData] =useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    

    // ф-я пошуку
    const handleSearch = (newQuery) => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);
    };

    // ф-я завант наст сторінки
    const handleLoadMore = () => {
        setPage(page+1)
    };

    // ф-я при кліку для виклику модалки
    const handleImageClick = (imageData) => {
        setModalImageData(imageData);
        setIsOpen(true);}


    useEffect(() => {
        if (query ==='') {
            return
        }
    
        // запит
    async function getImages () {
        try {
            setError(false);
            setIsLoading(true);
            const data = await fetchData(query, page);
            const totalPages = data.total_pages;
            setShowBtn (totalPages && totalPages !== page);
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
    const handleCloseModal = () => {
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
}