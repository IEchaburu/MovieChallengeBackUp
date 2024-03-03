import { useSelector } from "react-redux";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import './Manager.css'

const UserManager = () => {
    const userLogged = useSelector((state) => state.userLogged);

    const userBotton = () => {
        if (userLogged) {
            return (
                <a class="btn btn-outline-light" href="/login" role="button">Login/Register</a>
            )
        } else {
            <i className="bi bi-person" role="button" href="/profile"></i>
        };
    };

    return (
        <div className="user">
            {userBotton()}
        </div>
    );
};

export default UserManager;