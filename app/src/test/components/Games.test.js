import Games from "../../components/Games";
import React from "react";
import { render, screen, within } from '@testing-library/react'
import {MockedProvider} from "@apollo/client/testing";
import {GAMES_QUERY} from "../../queries";
import '@testing-library/jest-dom'

const fake_games_data = {
  "games": [
    {
      "id": "a3dd3bf2-3610-4308-85c3-fcfbece452c2",
      "name": "Monopoly"
    },
    {
      "id": "978e463e-f1f7-40ae-8fcc-7b953d9dd85a",
      "name": "Trouble"
    },
    {
      "id": "a93d5487-f784-4a1c-8bd6-b94bcfcf10de",
      "name": "Twin Tin Bots"
    }
  ]
};

const mocks = [{
  request: {
    query: GAMES_QUERY
  },
  result: {
    data: fake_games_data
  }
}];

describe("Games Page", () => {
  beforeEach(async () => {
    render(<MockedProvider mocks={mocks} addTypename={false}><Games/></MockedProvider>);
  });

  it("Contains a table", async () => {
    const gamesTable = await screen.findByRole('table');
    expect(gamesTable).toBeTruthy();
  });

  it("Table contains a header row", async () => {
    const gamesTable = await screen.findByRole('table');

    const firstRow = within(gamesTable).getAllByRole('row')[0];

    expect(firstRow).toHaveTextContent('Name');
  });

  it("Table contains a row for each game", async () => {
    const gamesTable = await screen.findByRole('table');

    const rows = within(gamesTable).queryAllByRole('row');
    expect(rows).toHaveLength(3+1);

    const row1 = within(gamesTable).getByText('Monopoly');
    const row2 = within(gamesTable).getByText('Trouble');
    const row3 = within(gamesTable).getByText('Twin Tin Bots');
    expect(row1).toBeInTheDocument();
    expect(row2).toBeInTheDocument();
    expect(row3).toBeInTheDocument();
  });
});