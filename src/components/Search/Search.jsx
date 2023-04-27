import './index.css';

export const Search  = ({setValue}) => {
    return <input
    placeholder='Поиск...'
    className='search__input'
    onChange={(e)=>setValue(e.target.value)}
    />
}