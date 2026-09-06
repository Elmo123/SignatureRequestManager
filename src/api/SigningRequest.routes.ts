import { Router } from "express";
import { SigningRequestService } from "../services/signingRequest.service";

const router = Router();

/**
 * @openapi
 * /signing-requests:
 *   post:
 *     summary: Create a new signing request
 *     tags:
 *       - Signing Requests
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               documentId:
 *                 type: string
 *               recipients:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *     responses:
 *       200:
 *         description: Signing request created
 */
router.post("/", (req, res) => {
  const { documentId, recipients } = req.body;
  const result = SigningRequestService.create(documentId, recipients);
  res.json(result);
});

/**
 * @openapi
 * /signing-requests:
 *   get:
 *     summary: List all signing requests
 *     tags:
 *       - Signing Requests
 *     responses:
 *       200:
 *         description: List of signing requests
 */
router.get("/", (req, res) => {
  res.json(SigningRequestService.list());
});

/**
 * @openapi
 * /signing-requests/{id}:
 *   get:
 *     summary: Get signing request details
 *     tags:
 *       - Signing Requests
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Signing request details
 *       404:
 *         description: Not found
 */
router.get("/:id", (req, res) => {
  const result = SigningRequestService.get(req.params.id);
  if (!result) return res.status(404).json({ error: "Not found" });
  res.json(result);
});

export default router;
