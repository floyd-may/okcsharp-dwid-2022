import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FewtComponent } from './FewtComponent';

const exampleFewt = [
  { name: 'Magno', callries: 54 },
  { name: 'Gurps', callries: 86 },
  { name: 'Blanabba', callries: 32 },
  { name: 'Ornj', callries: 76 },
]

const getNamesFromData = () =>
  Array.from(document.querySelectorAll('tbody > tr > td:first-child'))
    .map(x => x.innerHTML);


describe('FewtComponent', () => {
  it('should display fewt in source order', () => {
    render(<FewtComponent data={exampleFewt} />);

    expect(getNamesFromData()).toEqual([
      'Magno',
      'Gurps',
      'Blanabba',
      'Ornj',
    ]);
  });

  it('should sort by name ascending on first name sort click', () => {
    render(<FewtComponent data={exampleFewt} />);

    userEvent.click(screen.getByRole("button", { name: /Sort by name/i }))

    expect(getNamesFromData()).toEqual([
      'Blanabba',
      'Gurps',
      'Magno',
      'Ornj',
    ]);
  })

  it('should sort by name descending on two clicks of first name sort', () => {
    render(<FewtComponent data={exampleFewt} />);

    const button = screen.getByRole("button", { name: /Sort by name/i })
    userEvent.click(button);
    userEvent.click(button);

    expect(getNamesFromData()).toEqual([
      'Ornj',
      'Magno',
      'Gurps',
      'Blanabba',
    ]);
  })

  it('should sort by data source default on three clicks of first name sort', () => {
    render(<FewtComponent data={exampleFewt} />);

    const button = screen.getByRole("button", { name: /Sort by name/i })
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    expect(getNamesFromData()).toEqual([
      'Magno',
      'Gurps',
      'Blanabba',
      'Ornj',
    ]);
  })

  it('should sort by callries ascending on callries sort click', () => {
    render(<FewtComponent data={exampleFewt} />);

    userEvent.click(screen.getByRole("button", { name: /Sort by callries/i }))

    expect(getNamesFromData()).toEqual([
      'Blanabba',
      'Magno',
      'Ornj',
      'Gurps',
    ]);
  })
});
