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

export const ContentService = {
  createContent,
  getContents,
  getSingleContents,
};
