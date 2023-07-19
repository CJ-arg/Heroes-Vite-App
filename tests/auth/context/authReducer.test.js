import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/types/types";

describe("Test on AuthReducer", () => {
  test("should show default state", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("should call login auth ", () => {
    const action = {
      type: types.login,
      paylod: {
        name: "juan",
        id: "abc",
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });
  test("should call logout delet name and logged false", () => {
    const state = {
      logged: true,
      user: { id: "abc", name: "juan" },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
