import { useState } from "react";
import { X, Mail, Lock, User, ArrowRight, CheckCircle } from "lucide-react";

export default function SignupForm({ isOpen, onClose }) {
  if(!isOpen) return null
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (formData.name && formData.email && formData.password) {
      setStep(2);
    }
  };

  const handleSignup = () => {
    console.log("User registered:", formData);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`bg-white rounded-2xl border-2 border-solid border-indigo-600 p-6 md:p-8 w-96 relative transform transition-transform duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer">
          <X size={24} />
        </button>

        {/* Form Header */}
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          {step === 1 ? "Create an Account" : "Verify Your Email"}
        </h2>
        <p className="text-gray-500 text-center mt-2">
          {step === 1 ? "Join us and explore AI-driven chatbots!" : "Enter the OTP sent to your email"}
        </p>

        {/* Step 1: Registration Form */}
        {step === 1 && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center border rounded-lg px-4 py-2">
              <User className="text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none px-2"
              />
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2">
              <Mail className="text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none px-2"
              />
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2">
              <Lock className="text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none px-2"
              />
            </div>

            {/* Continue with Google */}
            <button className="flex items-center justify-center w-full border rounded-lg py-2 hover:bg-gray-100 transition">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
            >
              Next
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center border rounded-lg px-4 py-2">
              <CheckCircle className="text-gray-500" />
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                className="w-full outline-none px-2"
              />
            </div>

            {/* Verify Button */}
            <button
              onClick={handleSignup}
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center hover:bg-green-700 transition"
            >
              Verify & Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
