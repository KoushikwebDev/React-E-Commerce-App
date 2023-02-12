import { sum } from "../sum";

test("Check the sum of two positive number", () => {
  expect(sum(3, 4)).toBe(7);
});
