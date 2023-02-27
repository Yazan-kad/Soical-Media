import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handelLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            cumque fugit rem expedita odio assumenda praesentium nam, ab
            distinctio unde reiciendis molestias veritatis quaerat earum amet
            saepe quod, repellat explicabo!
          </p>
          <span>Don't you have account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handelLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
