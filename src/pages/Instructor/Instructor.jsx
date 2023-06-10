import { useState } from "react";
import Container from "../../components/Container/Container";
import { useEffect } from "react";
import InstructorCard from "./InstructorCard";
import '../Instructor/Instructor.css'

const Instructor = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])

    return (
        <div className="bg-slate-200">
            <div className="instructor-banner flex flex-col justify-center items-center space-y-3 text-center">
                <h1 className="text-5xl">Meet all of ours awesome instructors</h1>
                <h1 className="text-2xl">Take the chance to learn from the all the leading instructors</h1>
            </div>
            <Container>
                <div className="grid md:grid-cols-3 gap-8 py-12">
                    {
                        instructors.map(instructor => <InstructorCard
                            key={instructor._id}
                            instructor={instructor}>
                        </InstructorCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Instructor;