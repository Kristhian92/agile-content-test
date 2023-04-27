import { viTest, test, expect } from "vitest";
import { jest } from "@types/jest";
import ResultsPage from "../Components/ResultsPage/ResultsPage.jsx";

const render = () => {};

test("renders without crashing", () => {
  render(<ResultsPage />);
});

test('displays "Please enter a search term" when input is empty', () => {
  const { queryByText } = render(<ResultsPage />);

  expect(queryByText(/Please enter a search term/)).not.toBeNull();
});

test("displays search results when search term is entered", async () => {
  const mockData = [
    {
      name: "lion",
      locations: ["Africa"],
      characteristics: {
        prey: "zebra",
        name_of_young: "cubs",
      },
    },
  ];
  jest.spyOn(globalThis, "fetch").mockResolvedValue({
    json: () => Promise.resolve(mockData),
  });

  const { getByTestId, queryByText } = render(<ResultsPage />);
  const searchInput = getByTestId("search-input");

  await viTest.type(searchInput, "lion");
  await viTest.submit(searchInput);

  expect(queryByText(/lion is an animal found in Africa/)).not.toBeNull();
});

test('displays "No results found" message when no search results are found', async () => {
  jest.spyOn(globalThis, "fetch").mockResolvedValue({
    json: () => Promise.resolve([]),
  });

  const { getByTestId, queryByText } = render(<ResultsPage />);
  const searchInput = getByTestId("search-input");

  await viTest.type(searchInput, "unicorn");
  await viTest.submit(searchInput);

  expect(queryByText(/No results found for "unicorn"/)).not.toBeNull();
});
