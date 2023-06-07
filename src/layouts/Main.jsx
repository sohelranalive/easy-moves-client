import { Outlet } from "react-router-dom";
import Heading from "../pages/Shared/Heading/Heading";
import SubHeading from "../pages/Shared/SubHeading/SubHeading"
import Footer from "../pages/Shared/Footer/Footer";
import Copyright from "../pages/Shared/Copyright/Copyright";

const Main = () => {
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