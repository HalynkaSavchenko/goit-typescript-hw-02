import toast, { Toaster } from 'react-hot-toast';
import { SearchBarProps } from '../../types';
import { FC } from 'react'
import css from './SearchBar.module.css'

export const SearchBar: FC<SearchBarProps> = ({onSearch}) => {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        const notify = () => toast ('Please enter a search value', {
            duration: 4000, 
            position: 'top-right',
            style: {
                borderRadius: '12px',
                background: '#3339',
                color: '#fff',
            },
            icon: '👏'
        })
        event.preventDefault();

        const searchInput = (event.target as HTMLFormElement).querySelector<HTMLInputElement>('input[name=search]');
        if (!searchInput) {
            notify();
            return;
        }
        const searchQuery = searchInput.value.trim();
        if (searchQuery !=='') {
            onSearch(searchQuery)
        }
       else {
        notify()
       }
    }
    return(
        <header>
            <form className={css.form} onSubmit={handleSubmit}>
                <input className={css.input} type='text' autoComplete='off' autoFocus placeholder="Search images and photos" name='search'/>
                <button className={css.btn} type='submit'>Search</button>
                <Toaster/>
            </form>
        </header>
    )
}