import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import { Bar } from 'react-chartjs-2';


export default function RightComp() {

    const context = useContext(VoteContext)

    useEffect(() => {
        setLabels(context.votes.map(i => i.item))
    }, [context.votes])

    useEffect(() => {
        setData(context.votes.map(i => i.point))
    }, [context.votes])

    const [data, setData] = useState()
    const [labels, setLabels] = useState()


    const chartData = {

        labels: labels,
        datasets: [
            {
                label: 'Votes',
                data: data,
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

                ],

            }
        ]
    }

    const pointsArray = context.votes.map(item => item.point)

    const getSum = (total, num) => {
        return total + num;
    }

    const totalVotes = pointsArray.reduce(getSum, 0)

    const optionData = {
        responsive: true,
        title: {
            display: true,
            text: `Totale votes : ${totalVotes}`,
            fontSize: 20,
        },
        legend: {
            display: true,
            position: 'bottom',
        },
        scales: {
            xAxes: [
                {
                    stacked: true,

                },
            ],
            yAxes: [
                {
                    stacked: true,
                    ticks: {
                        display: true,
                    },
                },
            ],
        }
    }

    return (
        <div className='rightside'>
            <section >
                <Bar
                    data={chartData}
                    options={optionData}
                    width={100}
                    height={100}
                />
            </section>
        </div>
    )
}
