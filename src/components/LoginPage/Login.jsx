import { useState } from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { useFormik } from "formik";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

export function LonInForm() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [passState, setPassState] = useState(false);
  const navigate = useNavigate();

  const userDetails = [
    { email: "abdulrazeeth@gmail.com",name:"Abdul razeeth",userId:"razeeth11", password: "12345" },
    { email: "john@example.com",name:"John",userId:"john111", password: "abcdef" },
    { email: "jane@example.com",name:"jane",userId:"jane436", password: "qwerty" },
  ];
  
  const submit = (values) => {
    const user = userDetails.find(
      (user) => user.email === values.email && user.password === values.password
    );
  
    if (!user) {
      if (!userDetails.some((user) => user.email === values.email)) {
        setEmail(true);
      } else {
        setPassword(true);
      }
    } else {
      localStorage.setItem("token", user.userId);
      navigate("/");
    }
  };
  

  const validation = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: (values) => submit(values),
  });

  return (
    <div className="logIn-form">
      <span style={{color:"rgb(72, 38, 104)",fontSize:"32px",fontWeight:600}}>RhomBuzz</span>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-div">
          <span className="material-symbols-outlined">
            <MailOutlineOutlinedIcon />
          </span>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="on"
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <p className="error">Enter Valid Email</p>
        ) : null}
        {email ? <p className="error">Invalid Credentials</p> : null}
        <div className="input-div">
          <span className="material-symbols-outlined">
            <HttpsOutlinedIcon />
          </span>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            type={passState ? "text" : "password"}
            placeholder="Password"
            autoComplete="on"
          />
          {!passState ? (
            <span
              onClick={() => setPassState(true)}
              id="eye"
              className="material-symbols-outlined"
            >
              <VisibilityOutlinedIcon />
            </span>
          ) : (
            <span
              onClick={() => setPassState(false)}
              id="eye"
              className="material-symbols-outlined"
            >
              <VisibilityOffOutlinedIcon />
            </span>
          )}
        </div>
        {formik.errors.password && formik.touched.password ? (
          <p className="error">Wrong Password</p>
        ) : null}
        {password ? <p className="error">Invalid Credentials</p> : null}
        <button type="submit">Log In</button>
        <p className="copyright">Copyright &#169; 2024 RhomBuzz Inc.</p>
      </form>
    </div>
  );
}
