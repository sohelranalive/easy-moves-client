import { useState } from 'react';
import Container from '../../components/Container/Container';
import '../Classes/Classes.css'
import { useEffect } from 'react';
import SingleClassCard from './SingleClassCard';
import useAuth from '../../hooks/useAuth';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';


const Classes = () => {

    const { user } = useAuth()

    const [userLevel, setUserLevel] = useState('')
    const [dataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        if (!user) {
            return
        }
        fetch(`https://b7a12-summer-camp-server-side-sohelranalive.vercel.app/user/level?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserLevel(data.level)
            })
    }, [user])

    const [classes, setClasses] = useState([])

    useEffect(() => {
        setDataLoading(true)
        fetch('https://b7a12-summer-camp-server-side-sohelranalive.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setDataLoading(false)
            })
    }, [])


    return (
        <div className='bg-slate-200'>
            <div className="classes-banner flex flex-col justify-center items-center space-y-3 text-center">
                <h1 className="text-5xl">Explore all of ours awesome classes</h1>
                <h1 className="text-2xl">We have variety of classes, Choose classes as per your interest</h1>
            </div>
            <Container>
                {dataLoading
                    ? <LoaderSpinner></LoaderSpinner>
                    : <div className="grid md:grid-cols-3 gap-8 py-12">
                        {
                            classes.map(singleClass => <SingleClassCard
                                key={singleClass._id}
                                singleClass={singleClass}
                                userLevel={userLevel}>
                            </SingleClassCard>)
                        }
                    </div>
                }
            </Container>
        </div>
    );
};

export default Classes;