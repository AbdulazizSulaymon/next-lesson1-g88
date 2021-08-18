import ContainerWrapper from './ContainerWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheckCircle, faDesktop, faHome, faPhotoVideo, faPodcast, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { toggleSidebar } from '../../redux/actions/globalActions';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import { Slide } from 'react-awesome-reveal';

const menus = [
    { to: '/', icon: <FontAwesomeIcon icon={faHome} />, title: "Home", id: "home" },
    { to: '/users', icon: <FontAwesomeIcon icon={faUsers} />, title: "Users", id: "users" },
    { to: '/todos', icon: <FontAwesomeIcon icon={faCheckCircle} />, title: "Todos", id: "todos" },
    { to: '/albums', icon: <FontAwesomeIcon icon={faDesktop} />, title: "Albums", id: "albums" },
    { to: '/photos', icon: <FontAwesomeIcon icon={faPhotoVideo} />, title: "Photos", id: "photos" },
    { to: '/posts', icon: <FontAwesomeIcon icon={faPodcast} />, title: "Posts", id: "posts" },
]

const Container = ({ children, page }) => {
    const isShow = useSelector(state => state.global.isSidebarShow);

    return (
        <ContainerWrapper>
            <div className={`sidebar ${isShow && "show" || ""}`}>
                <p className="fw-bold fs-3 mb-4">M{isShow && <span>enu</span>}</p>
                <ul className="menu">
                    {menus.map((v, i) => <li key={v.to}>
                        <Slide delay={i * 100}>
                            <Link href={v.to}>
                                <a className={`${page == v.id && "active" || ""}`}>
                                    {v.icon} {isShow && v.title}
                                </a>
                            </Link>
                        </Slide>
                    </li>)}
                </ul>
            </div>

            <div className="rightside">
                <header className="px-2 py-3 shadow">
                    <Button onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <img src={"vercel.svg"} className="logo" alt="" />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default Container
