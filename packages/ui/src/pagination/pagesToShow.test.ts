import { pagesToShow } from "./pagesToShow";

describe("pagesToShow", () => {
  it("shows 1 page", () => {
    expect(pagesToShow(1, 1, 1)).toEqual([1]);
  });

  it("shows 2 pages", () => {
    expect(pagesToShow(1, 1, 2)).toEqual([1, 2]);
    expect(pagesToShow(1, 2, 2)).toEqual([1, 2]);
  });

  it("shows 3 pages", () => {
    expect(pagesToShow(1, 1, 3)).toEqual([1, 2, 3]);
    expect(pagesToShow(1, 2, 3)).toEqual([1, 2, 3]);
    expect(pagesToShow(1, 3, 3)).toEqual([1, 2, 3]);
  });

  it("shows 4 pages", () => {
    expect(pagesToShow(1, 1, 4)).toEqual([1, 2, 3, 4]);
    expect(pagesToShow(1, 2, 4)).toEqual([1, 2, 3, 4]);
    expect(pagesToShow(1, 3, 4)).toEqual([1, 2, 3, 4]);
  });

  it("shows 5 pages", () => {
    expect(pagesToShow(1, 1, 5)).toEqual([1, 2, "more", 5]);
    expect(pagesToShow(1, 2, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(pagesToShow(1, 3, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(pagesToShow(1, 4, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(pagesToShow(1, 5, 5)).toEqual([1, "more", 4, 5]);
  });

  it("shows 6 pages", () => {
    expect(pagesToShow(1, 1, 6)).toEqual([1, 2, "more", 6]);
    expect(pagesToShow(1, 2, 6)).toEqual([1, 2, 3, "more", 6]);
    expect(pagesToShow(1, 3, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(pagesToShow(1, 4, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(pagesToShow(1, 5, 6)).toEqual([1, "more", 4, 5, 6]);
    expect(pagesToShow(1, 6, 6)).toEqual([1, "more", 5, 6]);
  });

  it("shows 7 pages", () => {
    expect(pagesToShow(1, 1, 7)).toEqual([1, 2, "more", 7]);
    expect(pagesToShow(1, 2, 7)).toEqual([1, 2, 3, "more", 7]);
    expect(pagesToShow(1, 3, 7)).toEqual([1, 2, 3, 4, "more", 7]);
    expect(pagesToShow(1, 4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(pagesToShow(1, 5, 7)).toEqual([1, "more", 4, 5, 6, 7]);
    expect(pagesToShow(1, 6, 7)).toEqual([1, "more", 5, 6, 7]);
    expect(pagesToShow(1, 7, 7)).toEqual([1, "more", 6, 7]);
  });

  it("shows 8 pages", () => {
    expect(pagesToShow(1, 1, 8)).toEqual([1, 2, "more", 8]);
    expect(pagesToShow(1, 2, 8)).toEqual([1, 2, 3, "more", 8]);
    expect(pagesToShow(1, 3, 8)).toEqual([1, 2, 3, 4, "more", 8]);
    expect(pagesToShow(1, 4, 8)).toEqual([1, 2, 3, 4, 5, "more", 8]);
    expect(pagesToShow(1, 5, 8)).toEqual([1, "more", 4, 5, 6, 7, 8]);
    expect(pagesToShow(1, 6, 8)).toEqual([1, "more", 5, 6, 7, 8]);
    expect(pagesToShow(1, 7, 8)).toEqual([1, "more", 6, 7, 8]);
    expect(pagesToShow(1, 8, 8)).toEqual([1, "more", 7, 8]);
  });

  it("shows 9 pages", () => {
    expect(pagesToShow(1, 1, 9)).toEqual([1, 2, "more", 9]);
    expect(pagesToShow(1, 2, 9)).toEqual([1, 2, 3, "more", 9]);
    expect(pagesToShow(1, 3, 9)).toEqual([1, 2, 3, 4, "more", 9]);
    expect(pagesToShow(1, 4, 9)).toEqual([1, 2, 3, 4, 5, "more", 9]);
    expect(pagesToShow(1, 5, 9)).toEqual([1, "more", 4, 5, 6, "more", 9]);
    expect(pagesToShow(1, 6, 9)).toEqual([1, "more", 5, 6, 7, 8, 9]);
    expect(pagesToShow(1, 7, 9)).toEqual([1, "more", 6, 7, 8, 9]);
    expect(pagesToShow(1, 8, 9)).toEqual([1, "more", 7, 8, 9]);
    expect(pagesToShow(1, 9, 9)).toEqual([1, "more", 8, 9]);
  });
});
