import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userLogOut } from "../../Redux/Actions/User/userActions";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../Utils/images/grey-user.png"
import './Manager.css'

const UserManager = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogged = useSelector((state) => state.userLogged);
    console.log(userLogged,"el user");

    const handleClick = () => {
        dispatch(userLogOut());
        navigate('/home');
    }

    const userBotton = () => {
        if (userLogged.length == 0) {
            return (
                <a class="btn btn-outline-light" href="/login" role="button">Login/Register</a>
            )
        } else {
            return (
                <div>
                    <a className="profile-icon" href="/profile" role="button">
                        <img src={image} alt="image" style={{ width: "40px", height: "auto" }}/>
                    </a>
                    <a class="btn btn-outline-secondary" onClick={handleClick} role="button">Log Out</a>
                </div>
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