import { useContext, useEffect, useState } from "react";
import "./authStyle.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../utils/url";



const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  const [logged, setLogged] = useContext(LoginContext);

  const navigate = useNavigate();

  useEffect(() => {
    const logData = localStorage.getItem("user");

    if (logData) {
      setLogged(true);
      navigate("/");
    }
  }, [setLogged, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0 && name.length === 0 && password.length === 0) {
      setErr("Please fillup data in each section");
    } else {
      try {
        const response = await axios.post(
          url + "/auth/register",
          {
            name,
            email,
            password,
          }
        );
        console.log(response)

        toast.success("Register Successful", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => {
          navigate("/login");
          
        }, 5000);
      } catch (error) {
        console.log(error)
        toast.error("Register Failure", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="register">
      <div className="container">
        <p className="title">Signup</p>
        <div className="error">{err && err}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Signup" className="btn" />
        </form>

        <p>
          Already have a account??{" "}
          <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
            Login
          </Link>{" "}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
