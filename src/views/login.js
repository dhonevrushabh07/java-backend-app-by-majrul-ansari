import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const navToLogIn = () => {
    navigate("/homepage");
  };
  return (
    <div className="container-fluid">
      <div
        className="row bg-dark justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-10 col-md-6 bg-secondary p-4 rounded-3">
          <div className="mb-2">
            <input
              className="form form-control"
              type="text"
              name="userName"
              placeholder="Enter UserName"
            />
          </div>

          <div className="mb-2">
            <input
              className="form form-control"
              type="text"
              name="userName"
              placeholder="Enter UserName"
            />
          </div>
          <div>
            <input
              className="btn btn-dark btn-lg w-100"
              type="button"
              value="LogIn"
              onClick={navToLogIn}
            />
          </div>
          <div className="text-center">
            <Link
              className="text-light text-decoration-none"
              to="/passwordreset"
            >
              Password Reset
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
