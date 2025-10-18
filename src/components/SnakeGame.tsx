"use client";
import { useState, useEffect, useCallback } from "react";

type SnakeGameProps = {
  onGameComplete?: () => void;
};

const SnakeGame = ({ onGameComplete }: SnakeGameProps) => {
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState([10, 10]);
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const gridSize = 15;

  // Generate random food position
  const generateFood = useCallback(() => {
    const newFood = [
      Math.floor(Math.random() * gridSize),
      Math.floor(Math.random() * gridSize),
    ];
    setFood(newFood);
  }, []);

  // Move snake logic
  const moveSnake = useCallback(() => {
    if (!gameStarted || gameOver) return;

    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = [...newSnake[0]];

      // Update head position based on direction
      switch (direction) {
        case "UP":
          head[1] -= 1;
          break;
        case "DOWN":
          head[1] += 1;
          break;
        case "LEFT":
          head[0] -= 1;
          break;
        case "RIGHT":
          head[0] += 1;
          break;
        default:
          break;
      }

      // Check wall collision
      if (
        head[0] < 0 ||
        head[0] >= gridSize ||
        head[1] < 0 ||
        head[1] >= gridSize
      ) {
        setGameOver(true);
        return prevSnake;
      }

      // Check self collision
      if (
        newSnake.some(
          (segment) => segment[0] === head[0] && segment[1] === head[1],
        )
      ) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check if food is eaten
      if (head[0] === food[0] && head[1] === food[1]) {
        setScore((prev) => prev + 1);
        generateFood();
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, gameStarted, generateFood]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) return;

      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, gameStarted]);

  // Game complete check
  useEffect(() => {
    if (score >= 10 && onGameComplete) {
      onGameComplete();
    }
  }, [score, onGameComplete]);

  // Game loop
  useEffect(() => {
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [moveSnake]);

  const startGame = () => {
    setSnake([[5, 5]]);
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
    generateFood();
  };

  return (
    <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-lg p-6 backdrop-blur-sm border border-teal-500/30">
      {/* Game Grid */}
      <div
        className="bg-slate-900 rounded-lg p-4 mb-4"
        style={{ width: "300px", height: "300px" }}
      >
        <div
          className="grid gap-0"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            width: "100%",
            height: "100%",
          }}
        >
          {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
            const x = idx % gridSize;
            const y = Math.floor(idx / gridSize);
            const isSnake = snake.some(
              (segment) => segment[0] === x && segment[1] === y,
            );
            const isHead = snake[0][0] === x && snake[0][1] === y;
            const isFood = food[0] === x && food[1] === y;

            return (
              <div
                key={idx}
                className={`${
                  isHead
                    ? "bg-teal-400"
                    : isSnake
                      ? "bg-teal-500"
                      : isFood
                        ? "bg-orange-400 rounded-full"
                        : "bg-slate-800"
                } border border-slate-700/50`}
              />
            );
          })}
        </div>
      </div>

      {/* Game Controls */}
      <div className="space-y-3">
        <div className="text-slate-300 text-sm">
          <div className="mb-2">// use keyboard</div>
          <div>// arrows to play</div>
          <div className="flex gap-2 mt-2 justify-center">
            <button className="bg-slate-800 px-3 py-1 rounded text-xs">
              ↑
            </button>
          </div>
          <div className="flex gap-2 justify-center">
            <button className="bg-slate-800 px-3 py-1 rounded text-xs">
              ←
            </button>
            <button className="bg-slate-800 px-3 py-1 rounded text-xs">
              ↓
            </button>
            <button className="bg-slate-800 px-3 py-1 rounded text-xs">
              →
            </button>
          </div>
        </div>

        {/* Food Counter */}
        <div className="text-slate-300 text-sm">
          <div>// food left</div>
          <div className="flex gap-1 mt-2">
            {Array.from({ length: 10 - score }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-teal-500 rounded-full" />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={startGame}
            className="bg-orange-400 hover:bg-orange-500 text-slate-900 px-4 py-2 rounded font-medium transition-colors"
          >
            {gameStarted && !gameOver ? "restart-game" : "start-game"}
          </button>

          {gameStarted && (
            <button
              onClick={() => setGameStarted(false)}
              className="bg-slate-700 hover:bg-slate-600 text-slate-300 px-4 py-2 rounded transition-colors"
            >
              skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
