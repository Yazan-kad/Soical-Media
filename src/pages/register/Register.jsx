import { Link } from "react-router-dom";
import "./reguster.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Yazan Soical.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            cumque fugit rem expedita odio assumenda praesentium nam, ab
            distinctio unde reiciendis molestias veritatis quaerat earum amet
            saepe quod, repellat explicabo!
          </p>
          <span>Do you have account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
