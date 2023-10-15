import Navbar from "../(navbar)/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar border />
      {children}
    </div>
  );
}
