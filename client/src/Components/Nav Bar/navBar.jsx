import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Nav.css';
import SearchBar from "../Search Bar/searchBar";
import UserManager from '../Account Manager/manager';


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                Movies
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/home">
                                        Popular
                                    </a>
                                </li>
                                <li><a className="dropdown-item" href="/top_rated_movies">
                                        Top Rated
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Series
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/popular_series">
                                        Popular
                                    </a>
                                </li>
                                <li><a className="dropdown-item" href="/top_rated_series">
                                        Top Rated
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <SearchBar/>
                    <UserManager/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;