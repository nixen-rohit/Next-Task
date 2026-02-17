"use client";

import { FiLogOut } from "react-icons/fi";
import PropTypes from "prop-types";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const ProfileMenu = ({ onToggleMenu }) => {
  const router = useRouter();
  const { user } = useAuth();

  // 🔥 Reusable logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // If using token cookie, clear it:
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

      // Redirect to login
      router.replace("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="absolute top-10 right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 shadow-lg ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
      
      {/* Signed in info */}
      <div className="border-b border-gray-100 px-4 py-2 dark:border-gray-800">
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
          Signed in as
        </p>
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          { user.email}
        </p>
      </div>

       

      {/* Logout button */}
      <div className="border-t border-gray-100 dark:border-gray-800">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-medium text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <FiLogOut size={16} />
          Sign out
        </button>
      </div>
    </div>
  );
};

ProfileMenu.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
};

export default ProfileMenu;
