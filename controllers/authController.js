/* eslint-disable max-classes-per-file */
const { StatusCodes } = require('http-status-codes');
const User = require('../model/User');
const { BadRequestError } = require('../errors/index');
const UnAuthenticatedError = require('../errors/index');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('please provide all values');
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { email: user.email, name: user.name }, token });
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError('Invalid Login Details');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Login Details');
  }
  const token = user.createJWT();
  user.password = undefined;

  res.status(StatusCodes.OK).json({ user, token });
};
exports.updateUser = async (req, res) => {
  const { email, name } = req.body;
  if (!email || !name) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;

  await user.save();

  const token = user.createJWT;

  res.status(StatusCodes.OK).json({ user, token });
};

