import { ContentService } from "./contentService.js";

const createContent = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const result = await ContentService.createContent(data);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getContents = async (req, res) => {
  try {
    const result = await ContentService.getContents();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Contents not found !" });
  }
};

const getSingleContents = async (req, res) => {
  try {
    const {id} = req.query
    const result = await ContentService.getSingleContents(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Contents not found !" });
  }
};

export const ContentController = {
  createContent,
  getContents,
  getSingleContents
};
