import { useTheme } from "../../hooks/use-theme";

import { 
    // overviewData, 
    recentSalesData, 
    topProducts 
} from "../../constants/constants";

import { Footer } from "../../layouts/Footer";

import { PencilLine, Star, Trash } from "lucide-react";
import AdminDash from "../../components/dashboard/AdminDash";
import LineGraph from "../../components/dashboard/LineGraph";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { OrdersDash } from "../../components/dashboard/OrdersDash";

const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Dashboard</h1>
            
            {/* Top Cards */}
            <AdminDash />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Line graph */}
                <LineGraph />
                {/* Recent Sales */}
                <RecentSales />
            </div>
            {/* Orders */}
            <OrdersDash />
            <Footer />
        </div>
    );
};

export default DashboardPage;