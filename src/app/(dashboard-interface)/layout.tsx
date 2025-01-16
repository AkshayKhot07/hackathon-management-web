import AuthProvider from "@/components/Providers/Auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div>
        <nav className="py-4 border border-black">Navbar</nav>
        {children}
      </div>
    </AuthProvider>
  );
}
