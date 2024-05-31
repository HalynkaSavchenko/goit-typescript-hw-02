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
    alt_description: string | null;
    id: string;
    likes: number;
    name: User;
    urls: Urls
};

export interface SearchResponse {
    results: Photo[];
    total: number;
    total_pages: number
};

export interface ImageCardProps {
    onImageClick:(ImageData: {modalUrl:string});
    alt_description: string;
    likes: number;
    urls: string;
    name: string;
    modalUrls: string
}
