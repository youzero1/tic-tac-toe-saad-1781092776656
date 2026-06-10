import clsx from 'clsx';
import type { GameStatus, Player } from '@/types';

type StatusBannerProps = {
  status: GameStatus;
  winner: Player | null;
  currentPlayer: Player;
};

export default function StatusBanner({ status, winner, currentPlayer }: StatusBannerProps) {
  let message = '';
  let colorClass = '';

  if (status === 'won' && winner) {
    message = `Player ${winner} wins! 🎉`;
    colorClass = winner === 'X' ? 'text-indigo-300' : 'text-rose-300';
  } else if (status === 'draw') {
    message = "It's a draw! 🤝";
    colorClass = 'text-yellow-300';
  } else {
    message = `Player ${currentPlayer}'s turn`;
    colorClass = currentPlayer === 'X' ? 'text-indigo-300' : 'text-rose-300';
  }

  return (
    <div
      className={clsx(
        'text-xl font-bold tracking-wide transition-all duration-300',
        colorClass
      )}
    >
      {message}
    </div>
  );
}
