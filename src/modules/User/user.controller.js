import { UserService } from "./user.service.js";

const createUser = async (req, res) => {
  try {
    const data = req.body;
    // console.log(data);

    const result = await UserService.createUser(data);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const email = req.params.email;
    const data = req.body;

    const result = await UserService.updateUser(email, data);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const email = req.params.email;

    const result = await UserService.getSingleUser(email);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const UserController = {
  createUser,
  updateUser,
  getSingleUser
};
