const users = [];

function findUserByUsername(username) {
  return users.find((user) => user.username === username);
}

export { findUserByUsername };
