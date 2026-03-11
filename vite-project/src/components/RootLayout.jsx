import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


// RootLayout component for the app
function RootLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout   