import vitest from "vitest";
import { it, expect } from "vitest";
import { jest } from "@types/jest";
import HomePage from "../Components/Homepage/Homepage.jsx";

vitest("HomePage", () => {
  it("renderiza sin errores", () => {
    expect(() => {
      vitest.mount(HomePage);
    }).not.toThrow();
  });
});


vitest("HomePage", () => {
  it("llama correctamente a la API", () => {
    const searchTerm = "lion";
    const searchAnimalMock = jest.fn();

    const { getByTestId } = vitest.mount(HomePage, {
      mocks: {
        searchAnimal: searchAnimalMock,
      },
    });

    const input = getByTestId("search-input");
    const button = getByTestId("search-button");

    vitest.change(input, searchTerm);
    vitest.click(button);

    expect(searchAnimalMock).toHaveBeenCalledWith(searchTerm);
  });
});
