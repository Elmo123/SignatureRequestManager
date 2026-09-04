export interface Recipient {
  id: string;
  name: string;
  email: string;
  status: "pending" | "signed" | "failed";
}

export interface SigningRequest {
  id: string;
  documentId: string;
  recipients: Recipient[];
  status: "pending" | "in_progress" | "completed";
  createdAt: Date;
  providerRequestId: string;
}
