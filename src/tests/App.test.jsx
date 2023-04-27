import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App.jsx";

describe('App', () => {
    it('renders homepage when path is "/"', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        expect(getByTestId('homepage')).toBeInTheDocument();
    });

    it('renders results page when path is "/results"', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        const searchInput = getByTestId('search-input');
        expect(searchInput).toBeInTheDocument();

        expect(getByTestId('results-page')).toBeInTheDocument();
    });
})