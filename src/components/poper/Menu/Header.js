import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';



const cx = className.bind(styles);

function Header({title, onBack }) {

    return (
        <header className={cx('header')}>  
        <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />

        </button>
                <h4 className={cx('header-title')}>{title}</h4>
        </header>

    )
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onabort: PropTypes.func.isRequired,
}

export default Header;