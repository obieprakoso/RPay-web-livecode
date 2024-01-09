import { Routes, Route } from "react-router-dom";
import ShoppingContiner from "../pages/container/Shopping.container";

// import PaymentMenuPageContainer from "../pages/PaymentMenus/container/PaymetMenuPageContainer";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ShoppingContiner />} />
        </Routes>
    );

    // <AuthLayout>
    //   <Routes>
    //     <Route path="/beranda" element={<ProtectRoute><BerandaPage /></ProtectRoute>} />
    //     <Route path="/" element={<Login />} />
    //     <Route
    //       path="/menu-management/user"
    //       element={
    //         <ProtectRoute>
    //           <User />
    //         </ProtectRoute>
    //       }
    //     />

    //     <Route path="/*" element={<ProtectRoute><NotFoundPage /></ProtectRoute>} />
    //   </Routes>
    // </AuthLayout>
};

export default Router;
