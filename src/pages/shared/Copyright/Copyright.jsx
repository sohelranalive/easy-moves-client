import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";

const Copyright = () => {
    return (
        <div className="bg-slate-950 text-white py-2">
            <Container>
                <div className="text-center">
                    <span>© 2023 Copyright:</span><Link className="font-semibold"> EasyMoves</Link>
                </div>
            </Container>
        </div>
    );
};

export default Copyright;