export const SignatureProviderMock = {
  initiateSigning(documentId: string, recipients: any[]) {
    return "provider-" + Math.random().toString(36).substring(2);
  }
};
