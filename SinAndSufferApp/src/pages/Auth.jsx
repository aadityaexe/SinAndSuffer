import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [forgotMode, setForgotMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setForgotMode(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
    );
  }, [isLogin, forgotMode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("sinful_users")) || [];

    if (!email || !password || (!isLogin && !name)) {
      toast.error("All fields are required.");
      return;
    }

    if (isLogin) {
      const user = storedUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        toast.success("Welcome back to the Abyss!");
        setTimeout(() => navigate("/ask-the-abyss"), 1000);
      } else {
        toast.error("Invalid email or password.");
      }
    } else {
      const userExists = storedUsers.some((u) => u.email === email);
      if (userExists) {
        toast.error("This email is already bound to a soul.");
        return;
      }
      const newUser = { name, email, password };
      localStorage.setItem(
        "sinful_users",
        JSON.stringify([...storedUsers, newUser])
      );
      toast.success("You have signed the pact successfully.");
      setIsLogin(true);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Enter your email to recover the password.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("sinful_users")) || [];
    const user = storedUsers.find((u) => u.email === email);

    if (user) {
      toast.info(`Your password: ${user.password}`, { autoClose: 5000 });
      setForgotMode(false);
      setIsLogin(true);
    } else {
      toast.error("No damned soul found with this email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-14 ">
      <ToastContainer position="top-center" />
      <div
        ref={cardRef}
        className="w-full max-w-lg rounded-3xl p-12 shadow-[0_0_80px_#7f1d1d55] "
      >
        <h1 className="text-5xl font-extrabold text-red-600 text-center mb-10 tracking-wide leading-tight">
          {forgotMode
            ? "Forgot Your Sin?"
            : isLogin
            ? "Enter the Abyss"
            : "Join the Damned"}
        </h1>

        <form
          onSubmit={forgotMode ? handleForgotPassword : handleSubmit}
          className="space-y-7"
        >
          {!isLogin && !forgotMode && (
            <div className="relative text-base">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Infernal Name"
                className="w-full pl-4 pr-4 py-3.5 text-2xl rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              />
            </div>
          )}

          <div className="relative text-base">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Sinful Email"
              className="w-full pl-4 pr-4 py-3.5 text-2xl rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
          </div>

          {!forgotMode && (
            <div className="relative text-base">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Hellish Password"
                className="w-full pl-4 pr-4 py-3.5 text-2xl rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              />
            </div>
          )}

          {isLogin && !forgotMode && (
            <p
              onClick={() => setForgotMode(true)}
              className="text-sm text-red-400 hover:underline cursor-pointer text-right"
            >
              Forgot Password?
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3.5 text-2xl rounded-xl shadow-lg tracking-wide transition duration-200"
          >
            {forgotMode
              ? "Recover My Sin"
              : isLogin
              ? "Confess & Enter"
              : "Sign the Pact"}
          </button>
        </form>

        <p className="mt-10 text-center text-gray-400 text-xl">
          {forgotMode ? (
            <>
              Remembered your pact?{" "}
              <button
                onClick={() => {
                  setForgotMode(false);
                  setEmail("");
                }}
                className="text-red-500 hover:underline font-semibold"
              >
                Return to Login
              </button>
            </>
          ) : isLogin ? (
            <>
              Not yet bound?{" "}
              <button
                onClick={toggleMode}
                className="text-red-500 hover:underline font-semibold"
              >
                Join the Damned
              </button>
            </>
          ) : (
            <>
              Already damned?{" "}
              <button
                onClick={toggleMode}
                className="text-red-500 hover:underline font-semibold"
              >
                Enter the Abyss
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
