import axios from "axios";
import { toast } from "react-toastify";
import { apiDomain } from "../utils/utilsDomain";


export const registerUser = async (dispatch, user) => {
  try {
    console.log(user);
    const response = await axios.post(`${apiDomain}/auth/register`, user);
    const data = response.data;

    if (response.status === 201 && data.status === "success") {
      toast.success("Registration successful", "signup-success");
    } else {
      throw new Error(data.message || "Failed to register user");
    }
    console.log(data);
  } catch (err) {
    const errorMessage =
      err.response?.data?.message || "An error occurred while registering user";
    if (
      err.response?.status === 400 &&
      errorMessage === "Email already registered"
    ) {
      toast.error(errorMessage, "signup-error");
    } else {
      toast.warning(errorMessage, "signup-error");
    }
    console.log(err);
  }
};


export const loginUser = (user) => async (dispatch) => {
  // Use async (dispatch) => ...
  console.log(user, dispatch);
  dispatch(loginStart());
  try {
    const { data } = await axios.post(`${apiDomain}/auth/login`, user);
    dispatch(loginSuccess(data));
    toast.info("Welcome back", "login", {
      position: "top-center",
    });
    console.log(data);
    return true;
  } catch (err) {
    console.log(err.response.data.message);
    toast.error(err.response.data.message, "login-error", {
      position: "top-center",
    });
    dispatch(loginFailure());
    return false;
  }
};

// login admin
export const loginAdmin = async (dispatch, admin) => {
  // const {username} = useSelector((state) => state.user.user)

  console.log(admin, dispatch);
  dispatch(loginStart());
  try {
    const { data } = await axios.post(`${apiDomain}/auth/loginAdmin`, admin);
    dispatch(loginSuccess(data));
    toast.info("Welcome back", "login", {
      position: "top-center",
    });
    // alert('logged in succesfully');
    console.log(data);
    return true;
  } catch (err) {
    // console.log(err)
    console.log(err.response.data.message);

    toast.error(err.response.data.message, "login-error", {
      position: "top-center",
    });

    dispatch(loginFailure());
    return false;
  }
};

//logout user
export const logOutuser = async (dispatch) => {
  console.log(dispatch);
  dispatch(logOut());
};

