import React from 'react'
import { useState } from "react"
import { X } from "lucide-react"

function Cards() {

    const submitHandler = (e) => {
        e.preventDefault();

        const copyTask = [...task];
        copyTask.push({ title, detail });
        setTask(copyTask)

        setTitle('')
        setDetail('')
    }

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [task, setTask] = useState([]);

    const deleteHandler = (idx) => {
        const copyTask = [...task];
        copyTask.splice(idx, 1);
        setTask(copyTask);
    }

    return (
        <div className='bg-black text-white h-screen lg:flex'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex justify-between items-start gap-4 p-10'>

                <div className='flex w-1/2 items-start gap-5 flex-col'>
                    <h1 className='text-4xl font-bold'>Add Notes</h1>

                    <input
                        type="text"
                        placeholder='Enter the Note Heading'
                        className='px-5 py-2 w-full border-2 rounded h-20 font-medium text-white'
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />

                    <textarea
                        placeholder='Write the Detail'
                        className='px-5 py-2 w-full border-2 rounded h-20 font-medium text-white'
                        value={detail}
                        onChange={(e) => {
                            setDetail(e.target.value);
                        }}
                    />
                    <button className='bg-white active:bg-gray-200 text-black px-5 py-2 rounded'>Add Notes</button>
                </div>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
                    alt=""
                    className='h-52 scale-x-[-1]'
                />
            </form>

            <div className='lg:w-1/2 bg-black p-10 border-l-2'>
                <h1 className='text-4xl font-bold'>Recent Notes</h1>
                <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
                    {task.map(function (elem, idx) {
                        return (
                            <div key={idx} className='relative h-52 w-40 rounded-xl bg-white text-black p-4'>
                                <button
                                    onClick={() => deleteHandler(idx)}
                                    className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1'
                                >
                                    <X size={12} strokeWidth={2.75} />
                                </button>
                                <h3 className='leading-tight text-xl font-bold p-1 mt-4'>{elem.title}</h3>
                                <p className='leading-tight'>{elem.detail}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cards