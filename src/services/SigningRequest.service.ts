import { SigningRequestRepository } from "../repositories/signingRequest.repository";
import { SignatureProviderMock } from "../providers/signatureProvider.mock";
import { SigningRequest } from "../models/signingRequest";

export const SigningRequestService = {
  create(documentId: string, recipients: any[]) {
    const id = Math.random().toString(36).substring(2);
    const providerRequestId = SignatureProviderMock.initiateSigning(documentId, recipients);

    const request: SigningRequest = {
      id,
      documentId,
      recipients: recipients.map((r: any) => ({
        id: Math.random().toString(36).substring(2),
        name: r.name,
        email: r.email,
        status: "pending"
      })),
      status: "pending",
      createdAt: new Date(),
      providerRequestId
    };

    return SigningRequestRepository.create(request);
  },

  list() {
    return SigningRequestRepository.list();
  },

  get(id: string) {
    return SigningRequestRepository.get(id);
  }
};
