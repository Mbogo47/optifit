import './auth.css'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const Signup = () => { 
    // const navigate = useNavigate();
      const schema = yup.object().shape({
        userName: yup.string().required("Username is required"),
        email: yup.string().required("Email is required"),
        password: yup
          .string()
          .required("Password is required")
          .matches(/[a-z]/, "Must contain at least one lowercase letter")
          .matches(/[A-Z]/, "Must contain at least one uppercase letter")
          .matches(/[0-9]/, "Must contain at least one number")
          .matches(
            /[^a-zA-Z0-9]/,
            "Must contain at least one special character"
          )
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
        // navigate('/login');
        const { userName, email, password } = data;
    };

    return (
      <form onSubmit={handleSubmit(onsubmit)}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("userName")}
        />

        {errors.userName && notify(errors.userName.message, "userName-error")}

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
          <input type="password" placeholder='Confirm your password' />
          {errors.confirmPassword && notify(errors.confirmPassword.message, 'confirmPassword-error')}

        <button className="btn-secondary">
          <span>Sign Up</span>
        </button>

        <span className="account">
          Have an account?
          <Link to="/login" className="link">
            Log In
          </Link>
        </span>
      </form>
    );
};
export default Signup;