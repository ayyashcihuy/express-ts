"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./Controllers/LoginController");
require("./Controllers/RootController");
var port = 8888;
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ["inikey"] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(port, function () {
    console.log("Server berjalan di localhost:".concat(port));
});