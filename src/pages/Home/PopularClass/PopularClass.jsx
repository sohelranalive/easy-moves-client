import { useEffect } from "react";
import Container from "../../../components/Container/Container";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { useState } from "react";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";

const PopularClass = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-sohelranalive.vercel.app/classes/popular')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, [])


    return (
        <div>
            <div className="bg-slate-900">
                <Container>
                    <div className="text-white">
                        <SectionTittle heading="Popular Classes" subHeading="Explore our most popular classes as per student's choice"></SectionTittle>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mt-12 justify-items-center">
                        {
                            classes.map(singleClass => <PopularCard
                                key={singleClass._id}
                                singleClass={singleClass}></PopularCard>)
                        }
                    </div>
                    <div className="text-center mt-12 pb-12">
                        <Link to='/classes' className="border-2 px-3 rounded-lg hover:bg-slate-600 py-3 bg-slate-900 text-white">View All Class</Link>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default PopularClass;