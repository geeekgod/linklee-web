/* eslint-disable @next/next/no-img-element */
import React from 'react'

const NotificationCard = ({
    logo = '/notification-icon.png',
    title = 'Notification Title',
    text = 'Notification Text',
    onClick = () => { }
}) => {

    return (
        <div
            onClick={onClick}
            className={`flex flex-row items-center justify-start bg-white bg-opacity-20 backdrop-blur-lg rounded-xl w-[300px] h-[60px] px-4`}
        >
            <img
                src={logo}
                width={40}
                height={40}
                className='rounded-xl'
                alt="notification"
            />
            <div
                className={`flex flex-col items-start justify-center ml-2`}
            >
                <p className='text-white text-sm font-semibold'>{
                    title?.length > 16 ? title.slice(0, 20) + '...' : title
                }</p>
                <p className='text-white text-xs'>{
                    text?.length > 20 ? text.slice(0, 20) + '...' : text
                }</p>
            </div>
        </div>
    )
}

export default NotificationCard