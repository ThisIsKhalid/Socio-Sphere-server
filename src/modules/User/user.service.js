import User from "./user.model.js";

const createUser = async (data) => {
  const isExist = await User.findOne({ email: data.email });

  if (!isExist) {
    const result = await User.create(data);

    return result;
  } else {
    return isExist;
  }
};

const updateUser = async (email, data) => {
  const isExist = await User.findOne({ email });

  if (isExist) {
    const result = await User.findOneAndUpdate({ email }, data, {
      new: true,
    });

    return result;
  }
};

const getSingleUser = async (email) => {
  const result = await User.findOne({ email });

  return result;
};

export const UserService = {
  createUser,
  updateUser,
  getSingleUser,
};
