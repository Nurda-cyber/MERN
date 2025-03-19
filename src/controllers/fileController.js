import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readFileAsync = (req, res) => {
  const filePath = path.join(__dirname, "../../data/sample.txt");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file", error: err });
    }
    res.json({ content: data });
  });
};
