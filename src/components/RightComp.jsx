import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import Slide from './Slide'

import { Bar } from 'react-chartjs-2';


export default function RightComp() {

    const context = useContext(VoteContext)

    useEffect(() => {
        // setstate(context.votes)
    }, [context.votes])

    const [chartData, setChartData] = useState({
        labels: ['Boston', 'Chicago', 'Nevada', 'Boston', 'Chicago', 'Nevada', 'Nevada', 'Boston', 'Chicago', 'Nevada'],
        datasets: [
            {
                label: 'Votes',
                data: [
                    42, 34, 56, 67, 65, 43, 100, 65, 102, 43
                ],
                backgroundColor: [
                    'rgb(35,217,238)',
                    'rgb(123,194,202)',
                    'rgb(34,108,162)',
                    'rgb(63,235,63)',
                    'rgb(233,227,76)',
                    'rgb(249,121,93)',
                    'rgb(235,55,16)',
                    'rgb(226,16,235)',
                    'rgb(156,16,235)',
                    'rgb(71,11,105)'

                ]
            }
        ]
    })


    // console.log(state);

    return (
        <div className='rightside'>
            <section >



                <Bar
                    data={chartData}
                    width={100}
                    height={50}
                // options={{ maintainAspectRatio: false }}
                />





                {
                    // state.map((item, index) => {
                    //     return (
                    //         <div key={index} >
                    //             {/* <Slide value={item} /> */}

                    //             <Bar
                    //                   data={item.point}
                    //                 width={100}
                    //                 height={50}
                    //                 options={{ maintainAspectRatio: false }}
                    //             />
                    //         </div>
                    //     )
                    // })
                }
            </section>
        </div>
    )
}
