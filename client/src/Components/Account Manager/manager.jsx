import { useSelector } from "react-redux";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../Utils/images/grey-user.png"
import './Manager.css'

const UserManager = () => {
    const userLogged = useSelector((state) => state.userLogged);

    const userBotton = () => {
        if (!userLogged) {
            return (
                <a class="btn btn-outline-light" href="/login" role="button">Login/Register</a>
            )
        } else {
            return (
                <a className="profile-icon" href="/profile" role="button">
                    <img src={image} alt="image" style={{ width: "40px", height: "auto" }}/>
                </a>
            )
        };
    };

    return (
        <div className="user">
            {userBotton()}
        </div>
    );
};

export default UserManager;