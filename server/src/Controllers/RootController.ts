import { Request, Response, NextFunction } from "express";
import { controller, get, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send(`
      <div>
      <div> Unauthorized </div>
      <a href="/auth/login"> Login </a>
      </div>
      `);
  }
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(
        `
                  <div>
                  <div> You Are Logged In </div>
                  <a href="/auth/logout"> Logout </a>
                  <a href="/protected"> Secret </a>
                  </div>
                  `
      );
    } else {
      res.send(
        `
                  <div>
                  <div> Unauthorized </div>
                  <a href="/auth/login"> Login </a>
                  </div>
                  `
      );
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Kamu tampan yang terproteksi");
  }
}
