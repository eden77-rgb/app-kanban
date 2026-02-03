import { SudokuCreator } from '@algorithm.ts/sudoku'
import { useState, useEffect } from "react";

export const Sudoku = () => {

  const [activeCell, setActiveCell] = useState<{r: number; c: number} | null>(null);
  const [sudokuGrid, setSudokuGrid] = useState<number[][]>([])
  const [solution, setSolution] = useState<number[][]>([])
  const [baseGrid, setBaseGrid] = useState<number[][]>([])
  const [win, setWin] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  // mettre grille génerée en array 2D
  function to2DArray<T>(arr: T[], size: number): T[][] {
        const result: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
    }

    //nouvelle grille au chargement de la page et pour reset
    useEffect(() => {
      if(win) return;

    const creator = new SudokuCreator({childMatrixWidth: 3})
    const created = creator.createSudoku(0.3)
    setSudokuGrid(to2DArray(created.puzzle, 9))
    setSolution(to2DArray(created.solution, 9))
    setBaseGrid(to2DArray(created.puzzle, 9))
    },[win])
  

    // modifier cases
    useEffect(() =>{
      const handleKeyDown = (event: KeyboardEvent): void => {
        if(event.key.toLowerCase() == 'p') setActiveCell(null);

        if(!activeCell) return;
        
        if(sudokuGrid[activeCell.r][activeCell.c] == baseGrid[activeCell.r][activeCell.c] 
          && baseGrid[activeCell.r][activeCell.c] >= 0) return;

        if("012345678".includes(event.key))
        {
          const newGrid = sudokuGrid.map(row => [...row]);
          newGrid[activeCell.r][activeCell.c] = parseInt(event.key);
          setSudokuGrid(newGrid)
          setActiveCell(null)
        }
        
        if(event.key == 'Escape' || event.key == 'Backspace')
        {
          const newGrid = sudokuGrid.map(row => [...row]);
          newGrid[activeCell.r][activeCell.c] = -1;
          setSudokuGrid(newGrid)
          setActiveCell(null)
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }, [activeCell])

    const checkWin = () => {
      if (sudokuGrid.length === 0) return;

      if (JSON.stringify(sudokuGrid) == JSON.stringify(solution))
      {
        setWin(true)
      }
      else
      {
        if(error) return

        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1000)
        
      }
    }

    const resetGame = () => {
      setWin(false)
      setActiveCell(null)
    }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-8">
      <div className="relative grid grid-cols-9 border-2 border-black rounded-xl overflow-hidden bg-white -mt-60">
        
        {win && (
          <div className="absolute inset-0 z-10 bg-black/80 flex flex-col items-center justify-center text-white animate-in fade-in duration-300">
            <h2 className="text-4xl font-extrabold text-green-500 mb-2">Victoire !</h2>
            <button 
              onClick={resetGame}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 active:scale-95"
            >
              Rejouer
            </button>
          </div>
        )}

        {sudokuGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isActive = activeCell?.r === rowIndex && activeCell?.c === colIndex;
            const isBaseCell = (baseGrid[rowIndex][colIndex] == cell && cell >= 0) ? true : false
            const isWrongCell = (cell != solution[rowIndex][colIndex] && cell >=0)

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => setActiveCell({ r: rowIndex, c: colIndex })}
                className={`
                  w-10 h-10 flex items-center justify-center border border-gray-300
                  text-lg font-semibold cursor-pointer transition-colors duration-100 text-black
                  ${colIndex % 3 === 2 && colIndex !== 8 ? "border-r-4 border-r-black" : ""}
                  ${rowIndex % 3 === 2 && rowIndex !== 8 ? "border-b-4 border-b-black" : ""}
                  ${isBaseCell && "text-blue-800"}
                  ${(!isBaseCell && error && isWrongCell) && "bg-red-500 duration-300"}
                  ${isActive && !isBaseCell ? "bg-amber-400 text-white" : "hover:bg-amber-200"}

                `}
              >
                {cell >= 0 ? cell : ""}
              </div>
            );
          })
        )}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={checkWin}>Vérifier</button>
     {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() =>setSudokuGrid(solution)}>Gagner</button> */}
    </div>
  );}