import request from "supertest";
import app from "../app";

describe("# router", () => {
  it("responds with json", async () => {
    const response = await request(app.callback()).get("/health");
    expect(response.status).toBe(200);
    expect(response.type).toEqual("application/json");
  });
});
