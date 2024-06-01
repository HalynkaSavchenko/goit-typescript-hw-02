import css from './Loader.module.css';
import { DNA } from 'react-loader-spinner';
import { FC } from 'react';

export const Loader: FC = () => {
    return(
       <div className={css.loader}>
         <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper" />
       </div>
          
    )
}