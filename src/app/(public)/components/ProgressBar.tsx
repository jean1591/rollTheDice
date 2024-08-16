import { classNames } from '@/utils/classNames'

export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-full bg-slate-100">
        <div
          className={classNames(
            progress >= 100 ? 'bg-green-300' : 'bg-blue-300',
            'h-2 rounded-full'
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
