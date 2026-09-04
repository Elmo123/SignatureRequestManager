import { SigningRequest } from "../models/SigningRequest";

const store = new Map<string, SigningRequest>();

export const SigningRequestRepository = {
  create(request: SigningRequest) {
    store.set(request.id, request);
    return request;
  },

  list() {
    return Array.from(store.values());
  },

  get(id: string) {
    return store.get(id);
  },

  update(id: string, data: Partial<SigningRequest>) {
    const existing = store.get(id);
    if (!existing) return null;
    const updated = { ...existing, ...data };
    store.set(id, updated);
    return updated;
  }
};
