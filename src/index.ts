import { Response } from "express";
import express from "express";
import routes from "./routes/";

const app = express();
const port = 3000;

app.use(routes);

app.get("/", (_, res: Response): void => {
  res
    .status(200)
    .send(
      "Server is working! http://locahost:${port}/images?imageName=string:imageName&width=string:width&height=string:height"
    );
});

app.listen(port, (): void => {
  console.log(`server is running at http://localhost:${port}`);
});

export default app;
