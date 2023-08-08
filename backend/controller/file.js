import { File } from "../model/file.js";

export const getFiles = async (req, res) => {
  try {
    const files = await File.find({ folderId: req.params.folderId });
    if (files) {
      return res.status(200).json(files);
    } else {
      return res.status(500).json("Folder has not been created");
    }
  } catch (error) {}
};

export const uploadFiles = async (req, res) => {
  try {
    const { file, fileName, folderId } = req.body;

    if (file === null || fileName === null || folderId === null)
      return res.status(500).json("value is null");

    const newFile = new File({ file, fileName, folderId });
    const fileData = await newFile.save();
    res.status(200).json(fileData);
  } catch (error) {
    console.log(error);
  }
};

export const editFile = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFolder = await File.findByIdAndDelete(id);

    if (!deleteFolder) return res.status(500).json("File not found");

    res.status(200).json(deleteFolder);
  } catch (error) {
    console.log(error);
  }
};

export const deleteFile = async (req, res) => {};
