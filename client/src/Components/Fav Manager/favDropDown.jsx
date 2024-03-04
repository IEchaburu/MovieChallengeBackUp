import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './FavDropDown.css'


const FavDropDown = () => {
    return (
        <div class="dropdown">
            <button class="btn btn-lg btn-dark btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/profile">Movies</a></li>
                <li><a class="dropdown-item" href="/favorite_series">Series</a></li>
            </ul>
        </div>
    )
}

export default FavDropDown;