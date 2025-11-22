import { useEffect } from "react";
import { useDashboardDispatch, useDashboardState } from "../context/DashboardProvider";
import { CONSTANT_DATA } from "../constants/constantData";

export default function useDashboardData() {
  const state = useDashboardState();
  const dispatch = useDashboardDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "SET_LOADING", payload: true });

      // Simulate API latency
      await new Promise((res) => setTimeout(res, 300));

      dispatch({ type: "SET_DATA", payload: CONSTANT_DATA });
      dispatch({ type: "SET_LOADING", payload: false });
    }

    fetchData();
  }, [dispatch]);

  return state;
}
