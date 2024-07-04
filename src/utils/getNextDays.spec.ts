import { getNextDays } from "./getNextDays";

describe("getBextDays", () => {
  it("should be returnt the next five days", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
