import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(` Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("ERR :  ", err);
  });
