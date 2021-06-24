import toBoolean from "../toBoolean";

describe("# toBoolean", () => {
  const truthyInputs = ["true", true, 1, "1", "yes", "Yes", "Y", "y"];
  const falsyInputs = ["false", false, 0, "0", "no", "No", "N", "n"];
  const nullInputs = [null, "", "sdfas"];

  truthyInputs.forEach((value) => {
    it(`should convert ${value} to true`, () => {
      const result = toBoolean(value);
      expect(result).toBe(true);
    });
  });

  falsyInputs.forEach((value) => {
    it(`should convert ${value} to false`, () => {
      const result = toBoolean(value);
      expect(result).toBe(false);
    });
  });

  nullInputs.forEach((value) => {
    it(`should convert "${value}" to "${value}"`, () => {
      const result = toBoolean(value);
      expect(result).toBe(value);
    });
  });
});
