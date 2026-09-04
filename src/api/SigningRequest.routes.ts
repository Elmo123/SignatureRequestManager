import { Router } from "express";
import { SigningRequestService } from "../services/SigningRequest.service";

const router = Router();

router.post("/", (req, res) => {
  const { documentId, recipients } = req.body;
  const result = SigningRequestService.create(documentId, recipients);
  res.json(result);
});

router.get("/", (req, res) => {
  res.json(SigningRequestService.list());
});

router.get("/:id", (req, res) => {
  const result = SigningRequestService.get(req.params.id);
  if (!result) return res.status(404).json({ error: "Not found" });
  res.json(result);
});

export default router;
