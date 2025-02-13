import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Trophy } from 'lucide-react';
import {HighScore} from "@/types";

export default function StartScreen() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [highScore, setHighScore] = useState<HighScore | null>(null);

    useEffect(() => {
        const savedHighScore = localStorage.getItem('highScore');
        if (savedHighScore) {
            setHighScore(JSON.parse(savedHighScore));
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.length < 2 || username.length > 20) {
            setError('El nombre debe tener entre 2 y 20 caracteres');
            return;
        }
        // Realiza el POST a la ruta /login
        Inertia.post('/login', { name: username });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
            <form onSubmit={handleLogin} className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    PC Builder Challenge
                </h1>

                {highScore && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Trophy className="text-yellow-500" />
                            <h2 className="text-xl font-semibold">Récord Actual</h2>
                        </div>
                        <p className="text-gray-700">
                            {highScore.username}: {highScore.score} puntos
                        </p>
                        <p className="text-sm text-gray-500">
                            Tiempo: {Math.floor(highScore.time / 60)}:{(highScore.time % 60).toString().padStart(2, '0')}
                        </p>
                    </div>
                )}

                <div className="mb-6">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de Usuario
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setError('');
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ingresa tu nombre"
                    />
                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                    Iniciar Juego
                </button>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Cómo Jugar:</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Arrastra los componentes desde el panel lateral</li>
                        <li>• Colócalos en la posición correcta del PC</li>
                        <li>• Gana puntos por colocaciones correctas</li>
                        <li>• ¡Complétalo rápido para un bonus extra!</li>
                    </ul>
                </div>
            </form>
        </div>
    );
}
