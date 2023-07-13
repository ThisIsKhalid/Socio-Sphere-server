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

// const getContents = async () => {
//   const results = await Content.find();
//   return results;
// };

// const getSingleContents = async (id) => {
//   const result = await Content.findById({ _id: id });
//   return result;
// };

export const UserService = {
  createUser,
  //   getContents,
  //   getSingleContents,
};
