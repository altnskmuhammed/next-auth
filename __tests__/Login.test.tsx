import { render, screen } from "@testing-library/react";
import LoginPage from "@/app/login/page";

describe("Login Page", () => {
  it("renders login button", () => {
    render(<LoginPage />);
    const button = screen.getByRole("button", { name: /auth0 ile giriş yap/i });
    expect(button).toBeInTheDocument();
  });
});
