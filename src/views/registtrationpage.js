import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const navToLogIn = () => {
    navigate("/login");
  };
  return (
    <div className="container-fluid">
      <div
        className="row bg-success justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6 ">
          <div className="text-center fs-2 p-4 fw-bold text-warning">
            Registration details
          </div>
          <div className="mb-2">
            <input
              className="form form-control"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-2">
            <input
              className="form form-control"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-2">
            <input
              className="form form-control"
              type="number"
              name="aadhar"
              placeholder="Enter Your Aadhar No"
            />
          </div>
          <div className="mb-2">
            <input
              className="form form-control"
              type="number"
              name="mobile"
              placeholder="Enter Your Mobile No"
            />
          </div>
          <div className="mb-2">
            <input
              className="form form-control"
              type="text"
              name="userName"
              placeholder="Enter Your User Name"
            />
          </div>
          <div className="mb-2">
            <input
              className="form form-control"
              type="password"
              name="pass"
              placeholder="Enter Your password"
            />
          </div>
          <div>
            <input
              className="btn btn-dark btn-lg w-100"
              type="button"
              value="Register"
              onClick={navToLogIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
