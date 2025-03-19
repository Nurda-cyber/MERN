export const getUsers = (req, res) => {
    res.json([{ id: 1, name: "Nurdaulet" }, { id: 2, name: "Ersin" }]);
  };
  
  export const createUser = (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    res.status(201).json({ id: Date.now(), name });
  };
  