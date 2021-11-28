import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div className="login">
      <button onClick={() => {
        dispatch(login({ name: "adham", age: 22, email: "adhamtarek291@gmail.com" }))
      }}>Login</button>
      <button onClick={() => {
        dispatch(logout())
      }
      }>logout</button>
    </div>
  );
}

export default Login;