const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const port = 8000;
const app = express();
const cors = require('cors')
const connect = require("./DB");
connect();
const { createUser, getUsers, getUser, updateUser, DeleteUser } = require("./Controller");
// const { updateOne } = require("./model");
router
  .post("/", createUser)
  // .get('/', ( response ) => { response.status('200').json({ message: 'alive' }) })
  // .get("/" , getUser)
  .get("/", getUsers)
  .get("/:id", getUser)
  .patch("/:id", updateUser)
  .delete("/:id", DeleteUser)

app.use(cors())
app.use(bodyParser.json());
app.use(router);
app.listen(port, () => {
  `working${port}`;
});