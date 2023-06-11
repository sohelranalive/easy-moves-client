import { Outlet, useLocation } from "react-router-dom";
import Heading from "../pages/Shared/Heading/Heading";
import SubHeading from "../pages/Shared/SubHeading/SubHeading"
import Footer from "../pages/Shared/Footer/Footer";
import Copyright from "../pages/Shared/Copyright/Copyright";
import { useEffect } from "react";

const Main = () => {

    const { pathname } = useLocation();


    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <>
            <SubHeading></SubHeading>
            <Heading></Heading>
            <Outlet></Outlet>
            <Footer></Footer>
            <Copyright></Copyright>
        </>
    );
};

export default Main;