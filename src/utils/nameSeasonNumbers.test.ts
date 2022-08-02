import nameSeasonNumbers from "./nameSeasonNumbers";

test("Correct format for numbers over 10", () => {
  expect(nameSeasonNumbers(16, 10)).toBe("S16E10");
});

test("Correct format for numbers less 10", () => {
  expect(nameSeasonNumbers(8, 4)).toBe("S08E04");
});

test("Mixture of less than 10 and more than 10", () => {
  expect(nameSeasonNumbers(8, 14)).toBe("S08E14");
  expect(nameSeasonNumbers(26, 1)).toBe("S26E01");
});
