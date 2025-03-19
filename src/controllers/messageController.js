import Message from '../models/Message.js';
import logger from "../log/logger.js"; 


export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    logger.error("Error fetching messages", error);
    res.status(500).json({ error: 'Server Error' });
  }
};
export const createMessage = async (req, res) => {
  const { text } = req.body;
  try {
    const message = new Message({ text });
    await message.save();
    logger.info("Message created", message);
    res.status(201).json(message);
  } catch (error) {
    logger.error("Error creating message", error);
    res.status(400).json({ error: 'Invalid Data' });
  }
};
