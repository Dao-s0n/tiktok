import PropTypes from 'prop-types';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import  Styles from "./AcountItem.module.scss";

const cx = classNames.bind(Styles)

function AcountItem( {data}) {
    return ( 
        <Link to={`/:${data.nickname}`} className={cx('Wrapper')}>
            <Image className={cx('avatar')} 
            src= {data.avatar}
             alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}

                </h4>
                <span className={cx('username')}>{data.nickname}</span>

            </div>
        </Link>
     );
}


AcountItem.propTypes = {
    data: PropTypes.object.isRequired,
}


export default AcountItem;