const AdminUsersComp = ({ userObj }) => {
    return (
      <div className="overflow-x-auto">
        <ul className="list-none p-0 m-0 min-w-max">
          {/* Header Row */}
          <li className="grid grid-cols-3 gap-4 border-b py-2 font-bold">
            <span>Name</span>
            <span>Email</span>
            <span>Hackathon Titles</span>
          </li>
          {/* User Rows */}
          {Object.keys(userObj).map((userId) => {
            const user = userObj[userId];
            return (
              <li
                key={userId}
                className="grid grid-cols-3 gap-4 border-b py-2 hover:bg-gray-100"
              >
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>
                  {user.hackathons
                    ?.map((hackathon) => hackathon.title)
                    .join(", ") || "N/A"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default AdminUsersComp;
  