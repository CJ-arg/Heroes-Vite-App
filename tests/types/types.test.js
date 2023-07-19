import { types } from "../../src/types/types";

describe("test on types.js", () => {
  test("should return TYPES", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
