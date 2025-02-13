import React from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Bienvenido</h1>
            </div>
        </>
    );
}
