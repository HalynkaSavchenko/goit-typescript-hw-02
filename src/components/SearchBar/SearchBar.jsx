import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'
// import { Simulate } from 'react-dom/test-utils';
export default function SearchBar({onSearch}) {
    function handleSubmit(event) {
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
        const searchQuery = event.target.elements.search.value.trim();
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