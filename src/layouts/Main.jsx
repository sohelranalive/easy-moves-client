import { Outlet } from "react-router-dom";
import Heading from "../pages/shared/Heading/Heading";
import SubHeading from "../pages/shared/SubHeading/SubHeading"
import Footer from "../pages/shared/Footer/Footer";
import Copyright from "../pages/shared/Copyright/Copyright";

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