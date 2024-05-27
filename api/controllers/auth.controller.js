export const register = (req, res) => {
  const { username, email, password } = req.body;
  console.log("req.body", username);
  console.log("req.body", email);
  console.log("req.body", password);
  console.log("req.body", req.body);
  //db op
  console.log("register end point");
};

export const login = (req, res) => {
  //db op

  console.log("login end point");
};

export const logout = (req, res) => {
  //db op

  console.log("logout end point");
};
