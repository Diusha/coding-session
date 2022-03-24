// @ts-nocheck
import { rest } from "msw";
import { db } from "./db";

export const handlers = [
  // GET /favs/:id (where "id" is your model's primary key), returns a user by ID;
  // GET /favs, returns all favs (supports pagination);
  // POST /favs, creates a new item;
  // PUT /favs/:id, updates an existing item by ID;
  // DELETE /favs/:id, deletes an existing user by ID;
  ...db.fav.toHandlers("rest"),

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
