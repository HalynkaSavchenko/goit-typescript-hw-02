import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../../types';
import { FC } from 'react'
export const LoadMoreBtn: FC <LoadMoreBtnProps> = ({onClick}) => {
    return(
        <div className={css.container}>
            <button className={css.btn} onClick={onClick} type="submit">Load more</button>
        </div>
    )
}