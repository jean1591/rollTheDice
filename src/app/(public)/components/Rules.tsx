export const Rules = () => {
  return (
    <div className="flex-1 rounded-lg border-[1px] border-slate-200 p-4 shadow-lg">
      <p className="text-left text-xl font-semibold">How to play ?</p>

      <p className="mt-4">
        <span className="font-medium">Objective:</span> Be the first player to
        reach a 100 points !
      </p>

      <div className="mt-4 space-y-2">
        <p>
          Players take turns rolling the die as many times as they want during
          their turn.
        </p>
        <p>
          On each roll, the player accumulates points equal to the number
          rolled.
        </p>
        <p>
          If the player rolls a 1, his turn ends immediately, and he lose all
          points accumulated during that turn.
        </p>
        <p>
          The player can choose to end his turn at any time, adding the
          accumulated points to his total score and ending his turn.
        </p>
        <p>The first player to reach or exceed 100 points wins the game.</p>
      </div>
    </div>
  )
}
