import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import image from "../../../Utils/images/grey-user.png";


const Card = (props) => {
    let cImage = image


    return (
        <div className="card">
            { props.image ? (
                <img src={"https://image.tmdb.org/t/p/w500/"+ props.image} className="card-img-top" alt={props.name}/>

            ) : (
                <img src={cImage} className="card-img-top" alt={props.name}/>
            )}

                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props?.character}</p>
            </div>
        </div>
    );
};

export default Card;