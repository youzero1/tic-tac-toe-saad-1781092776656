import clsx from 'clsx';
import type { CellValue, Player } from '@/types';

type CellProps = {
  value: CellValue;
  index: number;
  isWinning: boolean;
  onClick: (index: number) => void;
  disabled: boolean;
  currentPlayer: Player;
};

export default function Cell({ value, index, isWinning, onClick, disabled, currentPlayer }: CellProps) {
  const isEmpty = value === null;

  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled}
      className={clsx(
        'relative flex items-center justify-center',
        'w-full aspect-square rounded-xl text-5xl font-extrabold',
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-indigo-400',
        isWinning
          ? 'bg-amber-400 scale-105 shadow-lg shadow-amber-400/50'
          : isEmpty && !disabled
          ? 'bg-[#2d2a6e] hover:bg-[#3730a3] hover:scale-105 cursor-pointer shadow-md'
          : 'bg-[#2d2a6e] cursor-default shadow-md',
        value === 'X' && !isWinning && 'text-indigo-400',
        value === 'O' && !isWinning && 'text-rose-400',
        isWinning && 'text-[#1e1b4b]'
      )}
    >
      {value && (
        <span
          className={clsx(
            'select-none drop-shadow-md',
            'animate-[pop_0.15s_ease-out_forwards]'
          )}
        >
          {value}
        </span>
      )}
      {isEmpty && !disabled && (
        <span
          className={clsx(
            'absolute inset-0 flex items-center justify-center text-4xl opacity-0 hover:opacity-20 transition-opacity duration-150',
            currentPlayer === 'X' ? 'text-indigo-400' : 'text-rose-400'
          )}
        >
          {currentPlayer}
        </span>
      )}
    </button>
  );
}
