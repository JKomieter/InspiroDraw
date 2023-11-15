import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "@/layout/Header";


it("should have contact sales", () => {
    render(<Header />);
    const element = screen.getByRole('span');
    expect(element).not.toBeInTheDocument();
})