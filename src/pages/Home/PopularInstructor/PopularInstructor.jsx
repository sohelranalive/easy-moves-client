import { useState } from "react";
import Container from "../../../components/Container/Container";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-sohelranalive.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data.slice(0, 6));
            })
    }, [])


    return (
        <div className="bg-slate-100">
            <Container>
                <div className="">
                    <SectionTittle heading="Popular Instructors" subHeading=" Meet all of our country leading extremely popular instructors"></SectionTittle>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-12 justify-items-center">
                    {
                        instructors.map(instructor => <PopularInstructorCard
                            key={instructor._id}
                            instructor={instructor}></PopularInstructorCard>)
                    }
                </div>
                <div className="text-center mt-12 pb-12">
                    <Link to='/instructors' className="px-3 rounded-lg hover:bg-slate-900 py-3 bg-slate-800 text-white">See All Instructors</Link>
                </div>
            </Container>
        </div>
    );
};

export default PopularInstructor;