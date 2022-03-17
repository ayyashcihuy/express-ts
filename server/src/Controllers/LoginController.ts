import { Request, Response } from "express";
import { get, controller, bodyValidator, post } from "./decorators/";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="POST">
        <div>
          <label for="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button>Submit</button>
      </form>
      `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      email === "admin@panin.co" &&
      password === "admin"
    ) {
      // Marked as login using cookie session only
      req.session = { loggedIn: true };
      // Redirect to the root
      res.redirect("/");
    } else {
      res.send("Invalid ID & Password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}

export default LoginController;
