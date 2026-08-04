import { Router } from "express";

import {
  authMiddleware,
  authorize,
} from "../../middlewares/auth.middleware.js";
import { doctorApprove } from "./doctorApprove.controller.js";

const approveRouter = Router();

approveRouter.patch(
  "/:doctorId/approve",
  authMiddleware,
  authorize("admin"),
  doctorApprove,
);

export default approveRouter;
