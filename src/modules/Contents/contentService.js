import Content from "./contentModel.js";

const createContent = async (data) => {
  const result = await Content.create(data);

  return result;
};

const getContents = async () => {
  const results = await Content.find();
  return results;
};

const getSingleContents = async (id) => {
  const result = await Content.findById({ _id: id });
  return result;
};

const getContentsByEmail = async (email) => {
  const result = await Content.find({ email }).populate("email");
  return result;
};

const updateContent = async (id, contentData) => {
  try {
    const result = await Content.findByIdAndUpdate(id, contentData, {
      new: true,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const ContentService = {
  createContent,
  getContents,
  getSingleContents,
  getContentsByEmail,
  updateContent,
};
