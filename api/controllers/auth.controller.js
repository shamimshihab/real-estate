import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  //has password

  const hashedPassword = await bcrypt.hash(password, 10);

  //new user
  try {
    const newUser = await prisma.user.create({
      data: {
        username,

        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "failed to creat user",
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

    // CHECK IF THE PASSWORD IS CORRECT

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid Credentials!" });

    // GENERATE COOKIE TOKEN AND SEND TO THE USER

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,

        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login!" });
  }
};

// export const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const secret = sjhbdcbcbirgdfbhervdvdvvvdsvsdv;
//     // check if the exists
//     const user = await prisma.user.findUnique({
//       where: { username: username },
//     });
//     console.log("user", user);
//     if (!user) return res.status(401).json({ message: "invalid credentials" });

//     //if the paswword is correct
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     const age = 1000 * 60 * 60 * 24 * 7;
//     // generate token

//     const token = jwt.sign({ id: user.id }, secret, {
//       expiresIn: age,
//     });
//     console.log("token", token);
//     res
//       .cookie("token", token, {
//         httpOnly: true,
//         maxAge: age,
//       })
//       .status(200)
//       .json({ message: "login succesful" });

//     if (!isPasswordValid)
//       return res.status(401).json({ message: "invalid credentials" });
//   } catch (e) {
//     res.status(500).json({
//       message: "failed",
//     });
//   }

//   //generate cookie token
//   //db op

//   console.log("login end pointwww");
// };

// export const login = async (req, res) => {
//   const { username, password } = req.body;
//   console.log(username, password);
//   try {
//     const secret = sjhbdcbcbirgdfbhervdvdvvvdsvsdv;
//     // check if the user exists

//     console.log("login hit");
//     const user = await prisma.user.findUnique({
//       where: { username: username },
//     });

//     console.log("user", user);
//     if (!user) return res.status(401).json({ message: "invalid credentials" });

//     // if the password is correct
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     console.log("password", isPasswordValid);
//     if (!isPasswordValid)
//       return res.status(401).json({ message: "invalid credentials" });

//     const age = 1000 * 60 * 60 * 24 * 7;
//     // // generate token //dotenv is not working
//     // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
//     //   expiresIn: age,
//     // });

//     console.log("secret", secret);
//     // generate token
//     const token = jwt.sign({ id: user.id }, secret, {
//       expiresIn: age,
//     });

//     console.log("token", token);

//     res
//       .cookie("token", token, {
//         httpOnly: true,
//         maxAge: age,
//       })
//       .status(200)
//       .json({ message: "login successful" });
//   } catch (e) {
//     res.status(500).json({
//       message: "failed",
//     });
//   }
// };

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
