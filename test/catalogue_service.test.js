const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

  describe("catalogueService.checkBook", () => {
    test("returns true if book exists in the list", () => {
      expect(catalogueService.checkBook("Oliver Twist by Charles Dickens")).toBe(true);
    });

    test("returns false if the book does not exist in the list", () => {
      expect(catalogueService.checkBook("Harry potter and the chambers of secrets")).toBe(false);
    });
  });
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });
    test("returns 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
  });
  describe("catalogueService.countBooksByKeyword", () => {
    test("returns the number of books containing the given keyword", () => {
      expect(catalogueService.countBooksByKeyword("Oliver")).toBe(1);
    });
    test("returns the number of books that does not contain the given keyword", () => {
      expect(catalogueService.countBooksByKeyword("Testing")).toBe(0);
    });
    test("returns the number of books that does contain numbers in the given keyword", () => {
      expect(catalogueService.countBooksByKeyword("2666")).toBe(1);
    });
  });
  describe("catalogueService.getBooksByAuthor", () => {
    test("returns the names of books by given author", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual(["A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens", "Great Expectations by Charles Dickens"]);
    });
    test("returns the names of books by given author not included on list", () => {
      expect(catalogueService.getBooksByAuthor("Shobir")).toEqual([]);
    });
  });
});