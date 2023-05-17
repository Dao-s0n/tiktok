import Button from "~/components/Button";
import className from "classnames/bind";
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';


const cx = className.bind(styles)


function MenuItem({data, onClick}) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (

        <Button className={classes} lefticon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
            </Button>
    
    )}

    MenuItem.propTypes = {
        data: PropTypes.object.isRequired,
        onClick: PropTypes.func,
    }

export default MenuItem;