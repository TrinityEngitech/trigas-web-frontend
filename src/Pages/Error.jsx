import { Link } from "react-router-dom";
// css
// import "../assets/css/Error.css";
// img
// import err from "../assets/image/404.png";
function Error() {
  return (
    <div>
      <div className="container-fulid" id="err-bg">
        <div className="row">
          <div className="col-lg-6 m-auto error text-center mt-5">
            {/* <img src={err} alt=""/> */}
            <h3>Oops! We can't find that page.</h3>
            <div className="err-btn">
                <Link to="/">Go Back Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
