import clsx from 'clsx';

type ScoreBoardProps = {
  scores: Record<string, number>;
  draws: number;
};

export default function ScoreBoard({ scores, draws }: ScoreBoardProps) {
  return (
    <div className="flex gap-4 w-full max-w-sm justify-center">
      <div className={clsx(
        'flex flex-col items-center justify-center',
        'bg-indigo-900/50 border border-indigo-500/30 rounded-xl px-6 py-3',
        'flex-1'
      )}>
        <span className="text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-1">Player X</span>
        <span className="text-indigo-400 text-3xl font-black">{scores['X'] ?? 0}</span>
      </div>

      <div className={clsx(
        'flex flex-col items-center justify-center',
        'bg-slate-800/50 border border-slate-600/30 rounded-xl px-6 py-3',
        'flex-1'
      )}>
        <span className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-1">Draws</span>
        <span className="text-slate-400 text-3xl font-black">{draws}</span>
      </div>

      <div className={clsx(
        'flex flex-col items-center justify-center',
        'bg-rose-900/50 border border-rose-500/30 rounded-xl px-6 py-3',
        'flex-1'
      )}>
        <span className="text-rose-300 text-xs font-semibold uppercase tracking-widest mb-1">Player O</span>
        <span className="text-rose-400 text-3xl font-black">{scores['O'] ?? 0}</span>
      </div>
    </div>
  );
}
