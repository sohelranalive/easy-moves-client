import { useState } from 'react';
import Container from '../../components/Container/Container';
import '../Classes/Classes.css'
import { useEffect } from 'react';
import SingleClassCard from './SingleClassCard';

const Classes = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, [])

    return (
        <div className='bg-slate-200'>
            <div className="classes-banner flex flex-col justify-center items-center space-y-3 text-center">
                <h1 className="text-5xl">Explore all of ours awesome classes</h1>
                <h1 className="text-2xl">We have variety of classes, Choose classes as per your interest</h1>
            </div>
            <Container>
                <div className="grid md:grid-cols-3 gap-8 py-12">
                    {
                        classes.map(singleClass => <SingleClassCard
                            key={singleClass._id}
                            singleClass={singleClass}>
                        </SingleClassCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Classes;