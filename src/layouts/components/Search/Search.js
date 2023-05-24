
import { useEffect, useState, useRef } from 'react';
import {Wrapper as PopperWrapper} from '~/components/poper'
import AcountItem from '~/components/AcountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, 
    faSpinner,
    faMagnifyingGlass, 
    } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import styles  from './Search.module.scss';
import classNames from 'classnames/bind';
 
 const cx = classNames.bind(styles)

 
 function Search() {
    const [searchValue, setSearchVvalue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debouncedValue = useDebounce(searchValue, 500);

    const inputResef = useRef()
    useEffect(() => {
        if(!debouncedValue.trim()){
            setSearchResult([])
            return;
        }
        setLoading(true)
       
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
                .then ((res) => res.json())
                .then( res => {
                    setSearchResult(res.data)
                    setLoading(false)
                })
                .catch(() => {
                    setLoading(false)
                })

        }, [debouncedValue]);

        const handleClear = () => {
            setSearchVvalue('');
            setSearchResult([]);
            inputResef.current.focus();
        }

        const handleHideResult = () => {
                setShowResult(false);
        }

        const handleChange = (e) => { 
            const searchValue = e.target.value
            if (!searchValue.startsWith(' ')){
                setSearchVvalue(searchValue);
            }
            }

            

    return ( 
   <div>
        <HeadlessTippy 
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                
                <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((result) => (
    
                            <AcountItem  key={result.id} data={result} />
                        ))
                        }
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
            >
            <div className={cx('search')}>
                <input 
                ref = {inputResef}
                value={searchValue}
                placeholder="search accounts and videos" 
                spellCheck={false} 
                onChange={handleChange}
                onFocus={() => setShowResult(true)}
                />
    
              {!!searchValue && !loading && (
    
                <button className={cx('clear')} onClick={ handleClear}>
                       <FontAwesomeIcon icon={faCircleXmark}  />
    
    
                </button>
              )}
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
               
    
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
    
            </div>
               </HeadlessTippy> 
   </div>);
}

export default Search;