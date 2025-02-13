import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                {children}
            </div>
        </div>
    );
}
