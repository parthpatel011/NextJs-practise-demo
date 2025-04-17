import React from "react";
// import UsersAnalytics from "./@user/page";
// import RevenueMetrics from "./@revenue/page";
// import Notifications from "./@notifications/page";

export default function ComplexDashboardLayout({
  children,
  user,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  user: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedin = true;
  return isLoggedin? (
    <>
        <div>{children}</div>
        <div>{user}</div>
        <div>{revenue}</div>
        <div>{notifications}</div>
        <div>{login}</div>
        {/* <UsersAnalytics/>
        <RevenueMetrics/>
        <Notifications/> */}
    </>
  ) : (
    login
  );
}
