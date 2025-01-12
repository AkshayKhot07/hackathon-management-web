import AdminDashboardSidebar from "@/components/AdminDashboardSidebar";

export default function AdminDashbaordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-4">
      <div className="flex flex-col md:flex-row gap-4">
      <AdminDashboardSidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
