import express from "express";

const router = express.Router();

import userRoute from "./user.route.js";
import docsRoute from "./docs.route.js";

const Routes = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/docs",
    route: docsRoute,
  },
];

Routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
