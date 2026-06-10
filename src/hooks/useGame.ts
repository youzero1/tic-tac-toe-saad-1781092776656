import { useState, useCallback } from 'react';
import type { GameState, Player, BoardState } from '@/types';
import { checkWinner, checkDraw, createEmptyBoard } from '@/lib/gameLogic';

const initialState: GameState = {
  board: createEmptyBoard(),
  currentPlayer: 'X',
  status: 'playing',
  winner: null,
  winningLine: null,
  scores: { X: 0, O: 0 },
  draws: 0,
};

export function useGame() {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const makeMove = useCallback((index: number) => {
    setGameState((prev) => {
      if (prev.status !== 'playing' || prev.board[index] !== null) {
        return prev;
      }

      const newBoard: BoardState = [...prev.board];
      newBoard[index] = prev.currentPlayer;

      const { winner, line } = checkWinner(newBoard);

      if (winner) {
        return {
          ...prev,
          board: newBoard,
          status: 'won',
          winner,
          winningLine: line,
          scores: {
            ...prev.scores,
            [winner]: prev.scores[winner] + 1,
          },
        };
      }

      if (checkDraw(newBoard)) {
        return {
          ...prev,
          board: newBoard,
          status: 'draw',
          winner: null,
          winningLine: null,
          draws: prev.draws + 1,
        };
      }

      return {
        ...prev,
        board: newBoard,
        currentPlayer: prev.currentPlayer === 'X' ? 'O' : 'X',
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      board: createEmptyBoard(),
      currentPlayer: 'X',
      status: 'playing',
      winner: null,
      winningLine: null,
    }));
  }, []);

  const resetAll = useCallback(() => {
    setGameState(initialState);
  }, []);

  return { gameState, makeMove, resetGame, resetAll };
}
