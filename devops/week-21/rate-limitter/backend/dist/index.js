import express from "express";
import { rateLimit } from "express-rate-limit";
const app = express();
const PORT = 3000;
app.use(express.json());
const otpRateLimit = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message: "Too many request, please try again after 5 minutes",
    standardHeaders: true,
    legacyHeaders: true,
});
const passwordRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3,
    message: "Too many request, please try again after 15 minutes",
    standardHeaders: true,
    legacyHeaders: true,
});
const otpStore = {};
app.post("/generate-otp", otpRateLimit, (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({
            message: "Email is required!"
        });
    }
    const otp = Math.floor(10000 + Math.random() * 90000).toString();
    otpStore[email] = otp;
    console.log(`OTP for ${email}: ${otp}`);
    res.status(200).json({
        message: "OTP Generated and logged"
    });
});
app.post('/reset-password', passwordRateLimit, (req, res) => {
    const { email, otp, password } = req.body;
    if (!email || !otp || !password) {
        res.status(400).json({
            message: "Email, OTP and password required!"
        });
    }
    if (otpStore[email] === otp) {
        console.log(`Password for ${email} has been reset to ${password}`);
        delete otpStore[email];
        res.status(200).json({ message: 'Password has been reset successfully' });
        console.log("Password has been reset successfully!");
    }
    else {
        res.status(401).json({ message: 'Invalid OTP' });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map