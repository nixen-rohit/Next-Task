"use client";

import { useAuth } from "@/components/AuthProvider";

const ProfileInfo = () => {
  const { user } = useAuth();

  // Get first character of name or email
  const initial = user.displayName?.[0]?.toUpperCase() ;

  return (
    <div className="flex items-center gap-3">
      
      {/* Circle with first character */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white font-bold shadow-md dark:bg-indigo-400">
        {initial}
      </div>

      {/* User info */}
      <div>
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">
          {user.displayName || user.email}
        </h2>
      </div>
    </div>
  );
};

export default ProfileInfo;
