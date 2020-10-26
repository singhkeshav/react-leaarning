
import 'bootstrap/dist/css/bootstrap.min.css';
export const Card = (props)=> {
    return (
  
            <div className="col-sm-6">
    <div className="card " >
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.phone}</h6>
      <p className="card-text">{props.website}</p>

    </div>
  </div>
  </div>
  );
}