import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./components/App";

describe("Favorite Movies App", () => {
  test("renders the app and shows initial UI", () => {
    render(<App />);
    expect(screen.getByText(/Favorite Movies/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/New Movie/i)).toBeInTheDocument(); // Update to match your placeholder
    expect(screen.getByText(/Add Movie/i)).toBeInTheDocument();
  });

  test("adds a new movie", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/New Movie/i);
    const button = screen.getByText(/Add Movie/i);

    fireEvent.change(input, { target: { value: "Inception" } });
    fireEvent.click(button);

    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
  });

  test("prevents adding an empty or whitespace movie", () => {
    render(<App />);
    const button = screen.getByText(/Add Movie/i);
    const input = screen.getByPlaceholderText(/New Movie/i);

    // Test empty input
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);
    expect(screen.queryByText(/Delete/i)).not.toBeInTheDocument();

    // Test whitespace input
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(button);
    expect(screen.queryByText(/Delete/i)).not.toBeInTheDocument();
  });

  test("marks a movie as watched and unwatched", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/New Movie/i);
    const button = screen.getByText(/Add Movie/i);

    fireEvent.change(input, { target: { value: "The Matrix" } });
    fireEvent.click(button);

    const checkbox = screen.getAllByRole("checkbox")[0]; // Ensure the correct checkbox is selected
    fireEvent.click(checkbox); // Mark as watched
    expect(screen.getByText(/The Matrix/i)).toHaveStyle("text-decoration: line-through");

    fireEvent.click(checkbox); // Unmark
    expect(screen.getByText(/The Matrix/i)).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a movie from the list", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/New Movie/i);
    const button = screen.getByText(/Add Movie/i);

    fireEvent.change(input, { target: { value: "Inception" } });
    fireEvent.click(button);

    const deleteButton = screen.getAllByText(/Delete/i)[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Inception/i)).not.toBeInTheDocument();
  });

  test("shows all movies correctly in the list", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/New Movie/i);
    const button = screen.getByText(/Add Movie/i);

    const movies = ["Inception", "The Matrix", "Interstellar"];
    movies.forEach((movie) => {
      fireEvent.change(input, { target: { value: movie } });
      fireEvent.click(button);
    });

    movies.forEach((movie) => {
      expect(screen.getByText(new RegExp(movie, "i"))).toBeInTheDocument();
    });

    expect(screen.getAllByText(/Delete/i)).toHaveLength(movies.length);
  });
});
