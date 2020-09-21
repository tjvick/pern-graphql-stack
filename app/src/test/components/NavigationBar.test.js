import {NavigationBar} from "../../components/NavigationBar";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import React from "react";
import {BrowserRouter} from "react-router-dom";

describe("Navigation Bar", () => {
  it("Contains a link to the Games Page", () => {
    render(<BrowserRouter><NavigationBar/></BrowserRouter>);

    const gamesLink = screen.getByText("Games").closest('a');
    expect(gamesLink.href).toMatch(/^.*\/games$/i);
  });

  it("Contains a link to the Players Page", () => {
    render(<BrowserRouter><NavigationBar/></BrowserRouter>);

    const gamesLink = screen.getByText("Players").closest('a');
    expect(gamesLink.href).toMatch(/^.*\/players$/i);
  });

  it("Contains a link to the Play Log Page", () => {
    render(<BrowserRouter><NavigationBar/></BrowserRouter>);

    const gamesLink = screen.getByText("Play Log").closest('a');
    expect(gamesLink.href).toMatch(/^.*\/playlog$/i);
  });
});