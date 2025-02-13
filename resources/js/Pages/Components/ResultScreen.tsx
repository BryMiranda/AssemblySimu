import React from 'react';

interface ResultScreenProps {
    score: number;
    time: number;
    username: string;
    isHighScore: boolean;
    onRestart: () => void;
    onHome: () => void;
}

export default function ResultScreen({ score, time, username, isHighScore, onRestart, onHome }: ResultScreenProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-4">Resultados</h1>
            <p>Usuario: {username}</p>
            <p>Puntaje: {score}</p>
            <p>Tiempo: {time} segundos</p>
            {isHighScore && <p>¡Nuevo récord!</p>}
            <div className="mt-4">
                <button onClick={onRestart} className="px-4 py-2 bg-green-500 text-white rounded mr-2">
                    Reiniciar
                </button>
                <button onClick={onHome} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Volver al inicio
                </button>
            </div>
        </div>
    );
}
