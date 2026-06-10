import clsx from 'clsx';
import type { BoardState, Player } from '@/types';
import Cell from '@/components/Cell';

type BoardProps = {
  board: BoardState;
  winningLine: number[] | null;
  onCellClick: (index: number) => void;
  disabled: boolean;
  currentPlayer: Player;
};

export default function Board({ board, winningLine, onCellClick, disabled, currentPlayer }: BoardProps) {
  return (
    <div
      className={clsx(
        'grid grid-cols-3 gap-3 p-4 rounded-2xl',
        'bg-[#1e1b4b] shadow-2xl'
      )}
      style={{ width: '100%', maxWidth: '360px' }}
    >
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          index={index}
          isWinning={winningLine ? winningLine.includes(index) : false}
          onClick={onCellClick}
          disabled={disabled || cell !== null}
          currentPlayer={currentPlayer}
        />
      ))}
    </div>
  );
}
