import React from "react";
import { describe, expect, it } from "vitest";
import { shallow, beforeEach, afterEach } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { createRoot } from "../main.jsx";

describe("Main", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("renders App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders BrowserRouter component", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("renders ReactDOM root", () => {
    createRoot(document.getElementById("root")).render(
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    );
    expect(document.getElementById("root").innerHTML).not.toBe("");
  });
});
