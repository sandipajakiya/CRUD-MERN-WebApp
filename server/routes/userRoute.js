import express from "express";
import { create, deleteuser, getAllUsers, getOne, update } from "../controller/usercontroller.js";

const route = express.Router();

// POST route to create a user
route.post("/create", create);

// GET route to fetch all users
route.get("/getAllUsers", getAllUsers);

//get one user
route.get("/getOne/:id", getOne);

//update the user
route.put("/update/:id", update);

//delete
route.delete("/deleteuser/:id", deleteuser);

export default route;
