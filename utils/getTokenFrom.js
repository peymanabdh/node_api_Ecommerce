export const getTokenFromHeader = (req) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  if (token === undefined) {
    return "token not found";
  } else {
    return token;
  }
};
