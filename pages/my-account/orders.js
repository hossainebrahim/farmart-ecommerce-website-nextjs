import React from "react";
import DashboardOrders from "../../app/components/order";
import DashboardLayout from "../../app/layout/DashboardLayout";

const Orders = () => {
  return (
    <DashboardLayout>
      <DashboardOrders />
    </DashboardLayout>
  );
};

export default Orders;
