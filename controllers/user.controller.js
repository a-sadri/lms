import httpStatus from "http-status";

import { userService } from "../services/index.js";

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.status(httpStatus.OK).sen(users);
};

const getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  res.status(httpStatus.OK).sen(user);
};

const updateUser = async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.status(httpStatus.OK).send(user);
};

const deleteUser = async (req, res) => {
  userService.deleteUserById(req.params.userId);
  req.status(httpStatus.NO_CONTENT).send();
};

export { createUser, getUsers, getUser, updateUser, deleteUser };
