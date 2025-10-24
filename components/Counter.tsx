import React from 'react';

const Counter = () => {
    const stats = [
        { count: '340+', label: 'Projects Complete' },
        { count: '240+', label: 'Happy Clients' },
        { count: '120+', label: 'Win Awards' },
        { count: '140+', label: 'Team Members' },
    ];
    return (
        <div className="py-20 bg-[#0a0e1a] text-white border-t border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <p className="text-5xl font-extrabold font-exo text-orange-500">{stat.count}</p>
                            <p className="text-lg mt-2 text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Counter;
