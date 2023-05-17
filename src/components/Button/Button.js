import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const cx= classNames.bind(styles)

function Button( {
      to, 
      href ,
      primary = false ,
      outline = false ,
      text = false,
      disabled = false,
      rounded = false,
      small = false, 
      large = false ,
      children ,
      onClick ,
      lefticon,
      righticon,
      className
      , ...passProps
     }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps,
    }

    //remove event listenert
    if(disabled){
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
    }

        if(to){
            props.to = to
            Comp = Link
        }else if (href){
            props.href = href
            Comp = 'a'

        }



    const classes = cx('wrapper' , {
        primary,
        [className] : className,
        outline,
        small,
        large,
        rounded,
        text,
        disabled,
    })


    return ( 
            <Comp className={classes} {...props}>
                {lefticon && <span className={cx('icon')}>{lefticon}</span>}
                    <span className={cx('title')}>{children}</span>
                {righticon && <span className={cx('icon')}>{righticon}</span>}

            </Comp>
     );
}

    Button.propTypes = {
        to: PropTypes.string,
        href: PropTypes.string,
        primary: PropTypes.bool,
        outline: PropTypes.bool,
        text: PropTypes.bool,
        disabled: PropTypes.bool,
        rounded: PropTypes.bool,
        small: PropTypes.bool,
        large: PropTypes.bool,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func,
        lefticon: PropTypes.node,
        righticon: PropTypes.node,
        className: PropTypes.string,
        
    }

export default Button ;