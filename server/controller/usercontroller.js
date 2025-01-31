import User from "../models/userModel.js";


//creating a user
export const create = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    // Validate input
    if (!fname || !lname || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Create a new user
    const userData = new User(req.body);

    // Save to the database
    const savedData = await userData.save();
    res.status(201).json({msg: "User Added Successfully"});
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ msg: "Email already exists" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};


//fatching all users
export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const userData = await User.find();

    // Check if users exist
    if (!userData || userData.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }

    // Return users
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//get the all users
export const getOne = async (req, res) => {
    try {
      const id = req.params.id; // Get the ID from request parameters
  
      // Check if the ID is valid
      if (!id) {
        return res.status(400).json({ msg: "ID is required" });
      }
  
      // Find the user by ID
      const userExist = await User.findById(id);
  
      // If user does not exist, return 404
      if (!userExist) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      // Return the user if found
      res.status(200).json(userExist);
    } catch (error) {
      // Handle invalid ID format error or other exceptions
      if (error.kind === "ObjectId") {
        return res.status(400).json({ msg: "Invalid user ID format" });
      }
      res.status(500).json({ error: error.message });
    }
  };

//update
  export const update = async(req, res) => {
    try {
      const id = req.params.id;

      if(!id){
        return res.status(400).json({msg: "ID is required"})
      }
      const userExist = await User.findById(id);

      if(!userExist){
        return res.status(404).json({msg: "uset not found"})
      }

      const updatedData = await User.findByIdAndUpdate(id, req.body, {new: true});
      res.status(200).json({msg: "USer Updated Successfully"});

      
    } catch (error) {
      // Handle invalid ID format error or other exceptions
      if (error.kind === "ObjectId") {
        return res.status(400).json({ msg: "Invalid user ID format" });
      }
      res.status(500).json({ error: error.message });
    
    }
  }

  //delete
  export const deleteuser = async (req, res) => {
    try {
      const id = req.params.id; // Get the ID from request parameters
  
      // Check if the ID is provided
      if (!id) {
        return res.status(400).json({ msg: "ID is required" });
      }
  
      // Attempt to find and delete the user
      const deletedUser = await User.findByIdAndDelete(id);
  
      // If the user does not exist, return 404
      if (!deletedUser) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      // Return success message
      res.status(200).json({ msg: "User deleted successfully", user: deletedUser });
    } catch (error) {
      // Handle invalid ID format or other exceptions
      if (error.kind === "ObjectId") {
        return res.status(400).json({ msg: "Invalid user ID format" });
      }
      res.status(500).json({ error: error.message });
    }
  };
  