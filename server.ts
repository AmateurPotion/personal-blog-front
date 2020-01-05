import Express from "express";
import next, { NextApiRequest, NextApiResponse } from "next";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const __DEV__ = process.env.NODE_ENV === "development";
const app = next({ dev: __DEV__ });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // NEXT와 EXPRESS를 연결해주는 코드
  const server = Express();

  server.use("/", Express.static(path.join(__dirname, "public")));

  /**
   * Dev Configure
   */
  if (__DEV__) {
    server.use(morgan("dev"));
  }
  server.use(Express.json());
  server.use(Express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );

  server.get("*", (req: NextApiRequest, res: NextApiResponse) => {
    return handle(req, res);
  });

  server.get(
    "/post/:postId",
    (req: NextApiRequest & Express.Request, res: NextApiResponse) => {
      return app.render(req, res, "/post", { postId: req.params.postId });
    },
  );

  server.listen(3060, () => {
    console.log("next+express running on port 3060");
  });
});
