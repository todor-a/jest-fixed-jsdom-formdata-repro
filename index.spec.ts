import { uploadDocument } from "./index.ts";

describe("uploadDocument", () => {
  it("should upload document successfully", async () => {
    const mockFile = new File(["hello"], "hello.pdf", {
      type: "application/pdf",
    });

    uploadDocument(mockFile);
  });
});
