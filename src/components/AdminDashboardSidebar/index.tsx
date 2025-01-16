"use client";

import { FaHackerrank, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function AdminDashboardSidebar() {
  const pathname = usePathname();

  console.log("PATHNAME", pathname);

  return (
    <div className="mt-5 flex flex-row md:flex-col gap-4 items-start">
      <Link href={"/admin/dashboard"}>
        <div
          className={classNames(
            "flex gap-2 items-center justify-center  font-semibold text-xl",

            pathname.includes("/admin/dashboard") && !pathname.includes("/users")
              ? "text-primary-1"
              : "text-secondary-1"
          )}
        >
          <span>
            <FaHackerrank />
          </span>
          <span>Hackathons</span>
        </div>
      </Link>
      <Link href={"/admin/dashboard/users"}>
        <div
          className={classNames(
            "flex gap-2 items-center justify-center  font-semibold text-xl",

            pathname.includes("/users") ? "text-primary-1" : "text-secondary-1"
          )}
        >
          <span>
            <FaUserAlt />
          </span>
          <span>Users</span>
        </div>
      </Link>
    </div>
  );
}
