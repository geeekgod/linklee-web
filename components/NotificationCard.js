import React from 'react'
import Image from 'next/image'

const NotificationCard = () => {
    return (
        <div
            className={`flex flex-row items-center justify-start bg-white bg-opacity-20 backdrop-blur-lg rounded-xl w-[300px] h-[60px] px-4`}
        >
            <Image
                src="/notification-icon.png"
                width={40}
                height={40}
                alt="notification"
            />
            <div
                className={`flex flex-col items-start justify-center ml-2`}
            >
                <p className='text-white text-sm font-bold'>Notification</p>
                <p className='text-white text-xs'>Here&apos;s notification text.</p>
            </div>
        </div>
    )
}

export default NotificationCard