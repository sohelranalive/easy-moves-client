import { useState } from "react";
import Container from "../../components/Container/Container";
import { useEffect } from "react";

const Instructor = () => {

    const [instructor, setInstructor] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])

    return (
        <div>
            <Container>
                <h1 className="text-4xl">Meet all of ours awesome instructors</h1>
            </Container>
        </div>
    );
};

export default Instructor;