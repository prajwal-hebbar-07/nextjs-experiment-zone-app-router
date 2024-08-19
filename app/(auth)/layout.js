import "../globals.css";

export const metadata = {
  title: "Authenticated",
  description: "Next.js Authentication Complete",
};

export default function AuthRootLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome Back!</p>
        <form>
          <button>Log Out</button>
        </form>
      </header>
      {children}
    </>
  );
}
