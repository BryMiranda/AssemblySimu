import React from 'react';

interface GameScreenProps {
    username: string;
    onGameComplete: (score: number, time: number) => void;
    onRestart: () => void;
}

export default function GameScreen({ username, onGameComplete, onRestart }: GameScreenProps) {
    const handleComplete = () => {
        const score = Math.floor(Math.random() * 100); // Ejemplo
        const time = Math.floor(Math.random() * 300);   // Ejemplo en segundos
        onGameComplete(score, time);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl mb-4">¡Buena suerte, {username}!</h1>
            {/* Aquí iría la lógica del juego */}
            <button onClick={handleComplete} className="px-4 py-2 bg-green-500 text-white rounded">
                Finalizar Juego
            </button>
            <button onClick={onRestart} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                Reiniciar
            </button>
        </div>
    );
}
