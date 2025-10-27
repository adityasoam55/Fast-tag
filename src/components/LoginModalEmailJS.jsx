// src/components/LoginModalEmailJS.jsx
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_z8w7ul8";
const TEMPLATE_ID = "template_m6goqic";
const PUBLIC_KEY = "CU-2PwqatViHeIvkw";

export default function LoginModalEmailJS({ isOpen, onClose }) {
  const [step, setStep] = useState("email"); // "email" | "otp"
  const [email, setEmail] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const intervalRef = useRef(null);

  const OTP_KEY = "fastag_otp";
  const OTP_EXP_KEY = "fastag_otp_exp";
  const LOGGED_IN_KEY = "fastag_user_email";

  useEffect(() => {
    // initialize EmailJS (safe to call multiple times)
    try {
      emailjs.init(PUBLIC_KEY);
      console.log("EmailJS initialized");
    } catch (err) {
      console.error("EmailJS init error:", err);
    }

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isOpen) resetAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  function resetAll() {
    setStep("email");
    setEmail("");
    setOtpInput("");
    setError("");
    setSending(false);
    setResendDisabled(false);
    setSecondsLeft(0);
    clearInterval(intervalRef.current);
  }

  function generateOtp() {
    return String(Math.floor(1000 + Math.random() * 9000));
  }

  function startResendCooldown(seconds = 60) {
    setResendDisabled(true);
    setSecondsLeft(seconds);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current);
          setResendDisabled(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }

  async function sendOtpEmail(otpToSend) {
    // IMPORTANT: EmailJS template must have "To Email" set to {{email}}
    const templateParams = {
      email: email, // matches {{email}} in "To Email"
      otp: otpToSend, // matches {{otp}} in template body
      time: new Date().toLocaleString(), // optional: use {{time}} in template
      // message: "" // optional extra fields
    };

    try {
      setSending(true);
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      console.log("EmailJS send success:", res);
      setSending(false);
      return { ok: true, res };
    } catch (err) {
      console.error("EmailJS send error:", err);
      setSending(false);

      // Build a friendly message
      const message =
        (err && (err.text || err.message)) ||
        "Failed to send OTP — check EmailJS logs and console.";
      return { ok: false, message, raw: err };
    }
  }

  const handleSendOtp = async (e) => {
    e?.preventDefault();
    setError("");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const otp = generateOtp();
    const expiry = Date.now() + 5 * 60 * 1000; // 5 minutes

    // store OTP & expiry in sessionStorage
    sessionStorage.setItem(OTP_KEY, otp);
    sessionStorage.setItem(OTP_EXP_KEY, String(expiry));

    const result = await sendOtpEmail(otp);
    if (!result.ok) {
      // show friendly error and suggest checking console and EmailJS dashboard
      console.error("EmailJS raw error:", result.raw);
      setError(
        result.message || "Failed to send OTP. Check console for details."
      );
      return;
    }

    startResendCooldown(60);
    setStep("otp");
  };

  const handleResend = async () => {
    setError("");
    const otp = generateOtp();
    const expiry = Date.now() + 5 * 60 * 1000;
    sessionStorage.setItem(OTP_KEY, otp);
    sessionStorage.setItem(OTP_EXP_KEY, String(expiry));

    const result = await sendOtpEmail(otp);
    if (!result.ok) {
      console.error("EmailJS raw error:", result.raw);
      setError(
        result.message || "Failed to resend OTP. Check console for details."
      );
      return;
    }
    startResendCooldown(60);
  };

  const handleVerifyOtp = (e) => {
    e?.preventDefault();
    setError("");

    const storedOtp = sessionStorage.getItem(OTP_KEY);
    const exp = Number(sessionStorage.getItem(OTP_EXP_KEY) || 0);

    if (!storedOtp || Date.now() > exp) {
      setError("OTP expired. Please resend.");
      return;
    }
    if (otpInput.trim() === storedOtp) {
      // success
      sessionStorage.removeItem(OTP_KEY);
      sessionStorage.removeItem(OTP_EXP_KEY);

      // mark user as logged in (frontend-only)
      sessionStorage.setItem(LOGGED_IN_KEY, email);

      // close modal and redirect to dashboard
      onClose?.();
      window.location.href = "/dashboard";
    } else {
      setError("Incorrect OTP. Try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" />

      {/* glass modal */}
      <div className="relative w-[92%] max-w-md p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white"
        >
          ✕
        </button>

        {step === "email" && (
          <>
            <h3 className="text-2xl font-semibold mb-4">Login</h3>
            <form onSubmit={handleSendOtp} className="space-y-4">
              <label className="block text-sm text-white/90">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-white/15 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                type="email"
              />
              {error && <p className="text-sm text-yellow-200">{error}</p>}

              <button
                type="submit"
                disabled={sending}
                className="w-full mt-1 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send OTP"}
              </button>
            </form>
          </>
        )}

        {step === "otp" && (
          <>
            <h3 className="text-2xl font-semibold mb-2">Enter OTP</h3>
            <p className="text-sm text-white/80 mb-3">
              A 4-digit code was sent to <b>{email}</b>. Expires in 5 minutes.
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                maxLength={4}
                className="w-full rounded-md px-3 py-2 bg-white/15 border border-white/30 placeholder-white/70 text-center text-lg tracking-widest text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1234"
              />
              {error && <p className="text-sm text-yellow-200">{error}</p>}

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2">
                Verify & Continue
              </button>
            </form>

            <div className="mt-3 flex items-center justify-between text-sm">
              <button
                onClick={() => {
                  setStep("email");
                  setOtpInput("");
                }}
                className="underline text-white/90"
              >
                Change email
              </button>

              <div>
                <button
                  onClick={handleResend}
                  disabled={resendDisabled}
                  className={`px-3 py-1 rounded-md text-sm ${
                    resendDisabled
                      ? "bg-white/10 text-white/40 cursor-not-allowed"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {resendDisabled ? `Resend in ${secondsLeft}s` : "Resend OTP"}
                </button>
              </div>
            </div>
          </>
        )}

        <p className="text-xs text-white/60 mt-4 text-center">
          By logging in you agree to our{" "}
          <a className="text-blue-200 underline" href="#">
            Terms & Conditions
          </a>
          .
        </p>
      </div>
    </div>
  );
}
