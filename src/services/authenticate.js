import jwt from "jsonwebtoken";

const secret = "thisismyjwtcodesecretforthischallenge";

export const authenticate = (username, password) => {
  const token = jwt.sign({ name: username, pass: password }, secret);
  return token;
};
