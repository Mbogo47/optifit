import "./auth.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import signinpic from "../../assets/login.svg";
import { useDispatch } from "react-redux";

const Signin = () => {

   const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const schema = yup.object().shape({
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
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    //    defaultValues: defaultValues,
  });

  const notify = (errorMessage, toastId) => {
    toast.error(errorMessage, { toastId });
  };

  const onsubmit = async (data) => {
    console.log(data);
    const success = await loginUser(dispatch, data);
    if (success) {
      toast.success("Login Successful");

       navigate("/user");
    }
  };
  return (
    <div className="login-form">
      <div className="signin-image">
        <img src={signinpic} alt="signin svg" />
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <label>Email</label>
        <input
          type="text"
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

        <button className="btn-secondary">
          <span>Sign In</span>
        </button>

        <span className="account">
          Don't have an account?
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
};
export default Signin;
