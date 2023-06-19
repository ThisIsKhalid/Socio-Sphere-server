import Content from "./contentModel.js";

const createContent = async (req, res) => {
  try {
    const { text } = req.body;
    const filePath = req.file.path;

    // Create a new Content
    const newContent = new Content({
      text,
      file: filePath,
    });

    // Save the content to the database
    await newContent.save();

    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getContents = async (req, res) => {
  try {
    // Fetch all content from the database
    const contents = await Content.find();

    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  createContent,
  getContents,
};
