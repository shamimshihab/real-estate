import express from "express";

const router = express.Router();

router.get(
  "/test",

  (req, res) => {
    console.log("first router works");
    res.send("works fine post route");
  }
);

router.post(
  "/test",

  (req, res) => {
    console.log("first router works");
    res.send("works fine post route");
  }
);

router.put(
  "/test",

  (req, res) => {
    console.log("first router works");
    res.send("works fine post route");
  }
);

router.delete(
  "/test",

  (req, res) => {
    console.log("first router works");
    res.send("works fine post route");
  }
);

export default router;
