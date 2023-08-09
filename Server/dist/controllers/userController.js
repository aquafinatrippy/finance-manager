"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = exports.RegisterUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_js_1 = require("../models/userModel.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_ts_1 = require("bcrypt-ts");
const RegisterUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).send({ message: "Missing credentials" });
    }
    const userExists = yield userModel_js_1.User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const salt = (0, bcrypt_ts_1.genSaltSync)(10);
    const hashedPw = (0, bcrypt_ts_1.hashSync)(password, salt);
    console.log(hashedPw);
    const user = yield userModel_js_1.User.create({
        name,
        email,
        password: hashedPw,
    });
    if (user) {
        res.status(201).json({
            message: "User created",
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(401);
        throw new Error("Failed to create user");
    }
}));
exports.RegisterUser = RegisterUser;
const LoginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield userModel_js_1.User.findOne({ email });
    if (user && (0, bcrypt_ts_1.compareSync)(password, user.password)) {
        res.status(201).json({
            message: "Login successful",
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(401);
        throw new Error("Invalid credentials");
    }
}));
exports.LoginUser = LoginUser;
const generateToken = (id) => {
    const secret = process.env.JWT_SECRET;
    return jsonwebtoken_1.default.sign({ id }, secret, {
        expiresIn: "1d",
    });
};
