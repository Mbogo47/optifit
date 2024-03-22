import "./auth.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import signinpic from "../../assets/signup.svg";
import { registerUser } from "../../redux/apiCall.js";
import { useDispatch } from "react-redux";

const Signup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[^a-zA-Z0-9]/, "Must contain at least one special character")
      .test(
        "password",
        "Password must be at least 8 characters long",
        (value) =>
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            value
          )
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const notify = (errorMessage, toastId) => {
    toast.error(errorMessage, { toastId });
  };

  const onsubmit = async (data) => {
    console.log(data);
    navigate('/signin');
    const { userName, email, password } = data;
    
     try {
       await registerUser(dispatch, { userName, email, password });
       console.log({ userName, email, password });
       // toast.success('User registered successfully', 'signup-success')
     } catch (err) {
       const errorMessage =
         err.response?.data?.message ||
         "An error occurred while registering user";
       console.log(err);
     }
  };

  return (
    <div className="login-form">
      <div className="signup-image">
        <img src={signinpic} alt="signin svg" />
      </div>

      <form onSubmit={handleSubmit(onsubmit)}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("userName")}
        />
        {errors.userName && notify(errors.userName.message, "username-error")}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && notify(errors.email.message, "email-error")}

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        {errors.password && notify(errors.password.message, "password-error")}

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword &&
          notify(errors.confirmPassword.message, "confirm-error")}

        <button className="btn-secondary">
          <span>Sign Up</span>
        </button>

        <span className="account">
          Have an account?
          <Link to="/signin" className="link">
            Log In
          </Link>
        </span>
      </form>
    </div>
  );
};
export default Signup;
