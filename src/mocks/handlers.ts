// @ts-nocheck
import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),

  // Handles a GET /user request
  rest.get("/users", (req, res, ctx) => {
    const dataSet = [
      {
        name: "Mike",
        username: "mike23",
        age: 30,
      },
      {
        name: "Kobe",
        username: "kobe8",
        age: 29,
      },
    ];

    return res(ctx.json(dataSet));
  }),
];
