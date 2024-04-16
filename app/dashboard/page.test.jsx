import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/dashboard/page'
 

describe("Dashboard", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", {
      name: /Dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });
});