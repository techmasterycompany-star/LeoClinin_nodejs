import { date, success } from "zod";
import { approveDoctor } from "./approveDoctor.service.js";

export async function doctorApprove(req, res, next) {
  const id = req.params.doctorId;
  const data = await approveDoctor(id);

  return res.status(200).json({
    success: true,
    message: "Doctor approved successfully",
    data: data,
  });
}
