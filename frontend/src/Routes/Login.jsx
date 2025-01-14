import Nav from "../components/Nav";
import UserLogin from "../components/UserLogin";

function Login() {
  return (
    <>
      <Nav />
      <div className="form-area">
        <UserLogin />
      </div>
    </>
  );
}

export default Login;
