import "../globals.css";

import { logout } from "@/actions/auth-actions";

export const metadata = {
  title: "Authenticated",
  description: "Next.js Authentication Complete",
};

export default function AuthRootLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome Back!</p>
        <form action={logout}>
          <button>Log Out</button>
        </form>
      </header>
      {children}
    </>
  );
}
