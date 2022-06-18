import Button from "react-bootstrap/Button";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  // Google Login
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center or">
        <div className="w-50 bg-black" style={{ height: "1px" }}></div>
        <span className="mx-3">or</span>
        <div className="w-50 bg-black" style={{ height: "1px" }}></div>
      </div>
        {errorElement}
      <div className="social-btn d-grid">
        <Button
          onClick={() => signInWithGoogle()}
          className="btn-lg mb-2"
          variant="info"
        >
          Google Sign In
        </Button>
        <Button
          onClick={() => signInWithGithub()}
          variant="secondary"
          className="btn-lg mb-2"
        >
          Github Sign In
        </Button>
        <Button variant="primary" className="btn-lg mb-2">
          FaceBook Sign In
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
