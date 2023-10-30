import React, { useState, useEffect, useRef } from 'react';

export const ScoreBoard = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isEditingHome, setIsEditingHome] = useState(false);
  const [isEditingAway, setIsEditingAway] = useState(false);
  const [homeTeamName, setHomeTeamName] = useState('Home Team');
  const [awayTeamName, setAwayTeamName] = useState('Away Team');
  const toggleGameButtonRef = useRef(null);


  useEffect(() => {
    let timer;
  
    // Add the event listener for the spacebar when the component mounts
    const handleKeyPress = (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        toggleGame();
        toggleGameButtonRef.current.focus();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
  
    if (isGameRunning) {
      timer = setInterval(() => {
        setGameTime((prevTime) => prevTime + 0.1);
      }, 100);
    } else {
      clearInterval(timer);
    }
  
    return () => {
      clearInterval(timer);
    
      // Clean up the event listener when the component unmounts
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isGameRunning]);
  

  const toggleGame = () => {
    setIsGameRunning((prevValue) => !prevValue);
  };

  const handleEditHomeName = () => {
    setIsEditingHome(true);
  };

  const handleSaveHomeName = () => {
    setIsEditingHome(false);
  };

  const handleEditAwayName = () => {
    setIsEditingAway(true);
  };

  const handleSaveAwayName = () => {
    setIsEditingAway(false);
  };

  const resetGame = () => {
    setIsGameRunning(false);
    setGameTime(0);
    setHomeScore(0);
    setAwayScore(0);
  };

  const updateScore = (team, value) => {
    if (team === 'home') {
      setHomeScore((prevScore) => prevScore + value);
    } else if (team === 'away') {
      setAwayScore((prevScore) => prevScore + value);
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-semibold">Scoreboard</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Home Team */}
        <div className="p-4 bg-gray-100 rounded-lg">
          {isEditingHome ? (
            <div className="mb-2">
              <input
                type="text"
                value={homeTeamName}
                onChange={(e) => setHomeTeamName(e.target.value)}
              />
              <button onClick={handleSaveHomeName}>Save</button>
            </div>
          ) : (
            <>
            <div className="flex gap-8 mb-2 text-xl font-semibold">
            <h2 className="">
              {homeTeamName}
            </h2>
              <button onClick={handleEditHomeName}>Edit</button>
              </div>
              </>
          )}
          <p className="text-lg">Score: {homeScore}</p>
          <div className="mt-2 space-x-2">
            {/* ... (score buttons remain the same) */}
          </div>
        </div>

        {/* Away Team */}
        <div className="p-4 bg-gray-100 rounded-lg">
          {isEditingAway ? (
            <div className="mb-2">
              <input
                type="text"
                value={awayTeamName}
                onChange={(e) => setAwayTeamName(e.target.value)}
              />
              <button onClick={handleSaveAwayName}>Save</button>
            </div>
          ) : (
            <div className="flex gap-8 mb-2 text-xl font-semibold">
            <h2 className="">
              {awayTeamName}
            </h2>
              <button onClick={handleEditAwayName}>Edit</button>
            </div>
          )}
          <p className="text-lg">Score: {awayScore}</p>
          <div className="mt-2 space-x-2">
            {/* ... (score buttons remain the same) */}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-lg">Game Time: {gameTime.toFixed(1)} seconds</p>
        <div className="mt-2 space-x-4">
        <button
  ref={toggleGameButtonRef}
  onClick={toggleGame}
  className={`${
    isGameRunning
      ? 'bg-yellow-500 hover:bg-yellow-600'
      : 'bg-green-500 hover:bg-green-600'
  } text-white px-4 py-2 rounded`}
>
  {isGameRunning ? 'Pause Game' : 'Start Game'}
</button>
          <button
            onClick={resetGame}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};
