import React, { useState } from 'react';
import {HighScore} from "@/types";
import ResultScreen from "@/Pages/Components/ResultScreen";
import GameScreen from "@/Pages/Components/GameScreen";
import StartScreen from "@/Pages/Components/StartScreen";

function GameApp() {
    const [screen, setScreen] = useState<'start' | 'game' | 'result'>('start');
    const [username, setUsername] = useState('');
    const [gameResult, setGameResult] = useState<{ score: number; time: number } | null>(null);

    const handleStartGame = (name: string) => {
        setUsername(name);
        setScreen('game');
    };

    const handleGameComplete = (score: number, time: number) => {
        setGameResult({ score, time });

        // Guardar high score en localStorage
        const savedHighScore = localStorage.getItem('highScore');
        const currentHighScore = savedHighScore ? JSON.parse(savedHighScore) as HighScore : null;

        if (!currentHighScore || score > currentHighScore.score) {
            const newHighScore: HighScore = {
                username,
                score,
                time,
                date: new Date().toISOString()
            };
            localStorage.setItem('highScore', JSON.stringify(newHighScore));
        }

        setScreen('result');
    };

    const handleRestart = () => {
        setScreen('game');
        setGameResult(null);
    };

    const handleHome = () => {
        setScreen('start');
        setGameResult(null);
        setUsername('');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {screen === 'start' && (
                <StartScreen onStart={handleStartGame} />
            )}

            {screen === 'game' && (
                <GameScreen
                    username={username}
                    onGameComplete={handleGameComplete}
                    onRestart={handleHome}
                />
            )}

            {screen === 'result' && gameResult && (
                <ResultScreen
                    score={gameResult.score}
                    time={gameResult.time}
                    username={username}
                    isHighScore={true}
                    onRestart={handleRestart}
                    onHome={handleHome}
                />
            )}
        </div>
    );
}

export default GameApp;
