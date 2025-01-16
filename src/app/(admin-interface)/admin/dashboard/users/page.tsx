import AdminUsersComp from "@/components/AdminUsersComp";
import { userObj } from "@/constants/data";

export default function AdminDashboardUserPage() {
  return (
    <div>
      <AdminUsersComp userObj={userObj} />
    </div>
  );
}
