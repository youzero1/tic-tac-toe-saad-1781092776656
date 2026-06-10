import { RotateCcw, RefreshCw } from 'lucide-react';
import { useGame } from '@/hooks/useGame';
import Board from '@/components/Board';
import ScoreBoard from '@/components/ScoreBoard';
import StatusBanner from '@/components/StatusBanner';

export default function GamePage() {
  const { gameState, makeMove, resetGame, resetAll } = useGame();
  const { board, currentPlayer, status, winner, winningLine, scores, draws } = gameState;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-5xl font-black text-white tracking-tight mb-1">
          Tic<span className="text-indigo-400">-</span>Tac<span className="text-rose-400">-</span>Toe
        </h1>
        <p className="text-slate-400 text-sm">Two player local game</p>
      </div>

      {/* Score Board */}
      <ScoreBoard scores={scores} draws={draws} />

      {/* Status */}
      <StatusBanner status={status} winner={winner} currentPlayer={currentPlayer} />

      {/* Game Board */}
      <Board
        board={board}
        winningLine={winningLine}
        onCellClick={makeMove}
        disabled={status !== 'playing'}
        currentPlayer={currentPlayer}
      />

      {/* Action Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={resetGame}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-150 shadow-lg hover:shadow-indigo-500/40 hover:scale-105 active:scale-95"
        >
          <RotateCcw size={16} />
          New Game
        </button>
        <button
          onClick={resetAll}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-all duration-150 shadow-lg hover:scale-105 active:scale-95"
        >
          <RefreshCw size={16} />
          Reset All
        </button>
      </div>

      {/* Footer */}
      <p className="text-slate-600 text-xs mt-2">Click a cell to place your mark</p>
    </div>
  );
}
