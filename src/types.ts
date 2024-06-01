interface User {
    name: string;
    [key:string]: string | number | null | object | boolean
};

interface Urls {
    small: string;
    regular: string;
    [key:string]: string
};

export interface Photo {
    alt_description: string;
    id: string;
    likes: number;
    user: User;
    urls: Urls
};

export interface SearchResponse {
    results: Photo[];
    total: number;
    total_pages: number
};

export interface ImageCardProps {
    onImageClick:(ImageData:ModalImage) => void;
    alt_description: string;
    likes: number;
    urls: string;
    name: string;
    modalUrls: string
};

export interface ImageGalleryProps {
    items: Photo[];
    onImageClick: (image: ModalImage) => void
};

export interface ModalImage {
    modalUrl: string;
    alt_description: string 
};


export interface ImageModalProps {
    onClose: () => void;
    state: boolean;
    img: ModalImage | null
};

export interface LoadMoreBtnProps {
    onClick: () => void
};

export interface SearchBarProps {
    onSearch: (newQuery: string) => void
}


