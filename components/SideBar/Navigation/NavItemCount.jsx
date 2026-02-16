"use client";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import useTaskCounts from "@/hooks/useTaskCounts";

const NavItemCount = ({ navItem }) => {
  const [mounted, setMounted] = useState(false);
  const taskCounts = useTaskCounts();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const count = taskCounts[navItem];

  return <span className="text-xs font-semibold">{count}</span>;
};

export default NavItemCount;

NavItemCount.propTypes = {
  navItem: propTypes.string.isRequired,
};
