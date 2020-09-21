import {NavigationBar} from "../../components/NavigationBar";
import { render, screen } from '@testing-library/react'
import React from "react";
import {BrowserRouter} from "react-router-dom";

describe("Navigation Bar", () => {
  beforeEach(() => {
    render(<BrowserRouter><NavigationBar/></BrowserRouter>);
  });

  it("Contains a link to the Games Page", () => {
    const gamesLink = screen.getByText("Games").closest('a');
    expect(gamesLink.href).toMatch(/^.*\/games$/i);
  });

  it("Contains a link to the Players Page", () => {
    const gamesLink = screen.getByText("Players").closest('a');
    expect(gamesLink.href).toMatch(/^.*\/players$/i);
  });

  it("Contains a link to the Play Log Page", () => {
    const gamesLink = screen.getByText("Play Log").closest('a');
    expect(gamesLink.href).toMatch(/^.*\/playlog$/i);
  });
});