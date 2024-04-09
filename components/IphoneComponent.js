import React from 'react'
import Image from 'next/image'
import NotificationCard from './NotificationCard';

const IphoneComponent = () => {
    return (
        <div className={`flex h-[600px] w-[500px] items-center justify-center`}>
            <Image
                className="absolute bottom-[-8%]"
                src="/iphone.png"
                width={400}
                height={400}
                alt="iphone"
            />

            {/* glassmorphism notification card */}
            <div className='flex flex-col items-center justify-center gap-y-4 h-full'>
                <NotificationCard logo='./notification-icon.png' title='Hello wassup' text='yo click on this' />
            </div>
        </div>
    );
};

export default IphoneComponent