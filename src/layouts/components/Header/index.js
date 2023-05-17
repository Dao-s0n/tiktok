import styles from './Header.module.scss'
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
     faEllipsisVertical, 
     faEarthAsia, 
     faCircleQuestion, 
     faKeyboard,
     faCloudUpload, 
     faUser,
     faCoins,
     faGear,
     faSignOut,
     faMessage,
     faInbox} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import config from '~/config/routes';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button'
import Menu from '~/components/poper/Menu';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';
import Search from '../Search'

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        children: {
            title: 'Language',
            data:[

                {
                    code:'en',
                    title: 'English',
                },
                {
                    code:'vi',
                    title: 'Tiếng việt',
                },
                

            ]

            
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedblack and kelp',
        to:'/feedblack'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts',
    },
]

function Header() {

const currentUser = true;

// Handle logic



    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
                default:
        }
    }
    const userMenu = [
        {
            icon:<FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to:'/@Son',
        },
        {
            icon:<FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to:'/coin',
        },
        {
            icon:<FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to:'/setting',
        },
        ...MENU_ITEMS,
        {
            icon:<FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to:'/logout',
            separate:true,
        },
    ]
    return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            
               <Link to = {config.home} className={cx('logo-link')}>  <img src={images.logo} alt='tiktok' /></Link>

                <Search />
          

            

               <div className={cx('actions')}>
               {currentUser ? (
                   <>
                   <Tippy delay={[0, 200]}
                     content="Upload Video" placement='bottom'>
                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faCloudUpload} />
                    </button>
                    
                   
                    </Tippy>
                    <Tippy delay={[0, 200]}
                     content="Messenger" placement='bottom'>
                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faMessage} />
                    </button>
                    
                   
                    </Tippy>
                    <Tippy delay={[0, 200]}
                     content="Inbox" placement='bottom'>
                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faInbox} />
                    </button>
                    
                   
                    </Tippy>
                   </> 
                    
                    
                    
               ) : (

                   <>
                   <Button text>Up load</Button>

                    <Button  primary  >Log in</Button>

                            
                            </>
                        
               )
            }
            <Menu  items={currentUser ? userMenu : MENU_ITEMS} onchange={handleMenuChange}> 
            {currentUser ? (
                <Image className={ cx('user-avatar')} alt="Nguyen Van A" 
                src="https://www.invert.vn/media/uploads/uploads/2022/12/06172901-11.jpeg"
                fallback=""
                />
            ) :(

                                <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />

                                </button>
            )
            }
                            </Menu>
            </div>
     </div>

        
    </header>)
}

export default Header;
