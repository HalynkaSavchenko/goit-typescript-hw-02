import css from './Loader.module.css'
import { InfinitySpin } from 'react-loader-spinner'

export default function loader() {
    return(
       <div className={css.loader}>
         <InfinitySpin 
            visible={true}
            width="300"
            color=" #8b80a2cd"
            ariaLabel="infinity-spin-loading"
            />
       </div>
          
    )
}