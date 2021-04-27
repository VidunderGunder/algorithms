import express from "express";

export default function restApi() {
  const PORT = 8080;
  const app = express();
  app.use(express.json());

  let greeting = "Hello, there!";

  app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

  app.get("/hello", (_, res) => {
    res.status(200).send(greeting);
  });

  app.post("/hello", (req, res) => {
    const { newGreeting } = req.body;
    greeting = newGreeting ?? newGreeting;
    res.status(200).send('New greeting "' + newGreeting + '" set.');
  });
}
