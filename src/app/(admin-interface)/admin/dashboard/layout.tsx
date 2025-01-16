import AdminDashboardSidebar from "@/components/AdminDashboardSidebar";
import AdminAuthProvider from "@/components/Providers/AdminAuth";

export default function AdminDashbaordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminAuthProvider>
      <div>
        <nav className="py-4 border border-black">Navbar</nav>
        <div className="py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <AdminDashboardSidebar />
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </AdminAuthProvider>
  );
}
