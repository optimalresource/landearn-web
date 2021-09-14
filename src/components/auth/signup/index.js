import React, {useState, useRef} from "react";
import SocialButtons from "../social-buttons";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../../responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { validateEmail } from '../../validate-email'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ref_code, setRefCode] = useState("");
    const [signupLoading, setSignupLoading] = useState(false);
    const emailRef = useRef();

    const role = "user";

    const isSmallMobile = useMediaQuery({
      query: mediaQueries.lessTextQuery,
    });

    let headerText = "Register with this simple form";
    if (isSmallMobile) {
      headerText = "Register with this form";
    }

    function signup() {
      let item = { email, password, ref_code, role };
        if (!validateEmail(email)){
          emailRef.current.focus();
          return toast.error("Please enter a valid email address");
        }

        if (password.length < 2){
          return toast.error("Please enter a password");
        }

        try {
          setSignupLoading(true);
          axios
            .post("https://landearn.bumasys.com/api/signup", item, {
              headers: {
                "Content-Type": "application/json"
              },
            })
            .then(() => {
              setSignupLoading(false);
              toast.success("You have signed up successfully");
            })
            .catch((e) => {
              setSignupLoading(false);
              if (e.response) {
                if (typeof e.response.data === "object") {
                  for (const key in e.response.data) {
                    if (Array.isArray(e.response.data[key])) {
                      e.response.data[key].map((err) => {
                        return toast.error(err);
                      });
                    }

                    if (typeof e.response.data[key] === "string") {
                      toast.error(e.response.data[key]);
                    }
                  }
                }

                if (Array.isArray(e.response.data)) {
                  e.response.data.map((err) => {
                    return toast.error(err);
                  });
                }

                if (typeof e.response.data === "string") {
                  toast.error(e.response.data);
                }
              }else {
                toast.error("Oops, an error occured");
              }
            });
        } catch (e) {
          toast.error("Oops, an error occured");
        }
    }

  return (
    <div className="auth-form">
      <div className="auth-header axiforma-regular-bold-black-16px">
        {headerText}
      </div>
      <div className="auth-inputs">
        <input
          type="text"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Referral (optional)"
          className="auth-input"
          value={ref_code}
          onChange={(e) => setRefCode(e.target.value)}
        />

        <div className="continue-button" onClick={signup}>
          <div className="button-text">
            {signupLoading ? "please wait.." : "Continue"}
          </div>
        </div>

        <div className="division">
          <div className="line"></div>
          <div className="middle-or axiforma-medium-black-12px">or</div>
          <div className="line"></div>
        </div>

        <SocialButtons />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
