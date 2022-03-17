import express from "express";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import "./Controllers/LoginController";
import "./Controllers/RootController";
const port = 8888;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["inikey"] }));
app.use(AppRouter.getInstance());

app.listen(port, () => {
  console.log(`Server berjalan di localhost:${port}`);
});
