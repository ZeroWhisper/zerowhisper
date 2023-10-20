// import lz from "lz-string";

import { Container } from "./style";
import { useEffect, useState } from "react";

type GameType = number[];

export const LotteryPage = () => {
  const [games, setGames] = useState<GameType[]>();

  const [inputPrize, setInputPrize] = useState<string>("");

  useEffect(() => {
    const prize = localStorage.getItem("prize");
    if (prize) setInputPrize(prize);
  }, []);

  useEffect(() => {
    localStorage.setItem("prize", inputPrize);
  }, [inputPrize]);

  const generateGame = () => {
    const gameArray: number[] = [];

    for (let i = 0; i < 50; ) {
      const newNumber = Math.round(Math.random() * 99);

      const alreadyExist = gameArray.find(
        (placedNumber) => placedNumber === newNumber
      );

      if (!alreadyExist) {
        gameArray.push(newNumber);
        i++;
      }
    }

    return gameArray.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  };

  const convertedPrizedInput = inputPrize?.split(",").map((str) => Number(str));

  return (
    <Container>
      <div className="config-input">
        <h2>Lottery</h2>
        <div className="inputs">
          <div>
            <label htmlFor="prize">Prized</label>
            <input
              type="text"
              name="prize"
              value={inputPrize || "Type your Game here, like '01, 03, 04,...'"}
              onChange={(e) => {
                setInputPrize(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="many">How Many</label>
            <input type="number" name="many" />
          </div>
        </div>
      </div>
      <div>
        <div className="game">
          <span>Great Prize</span>
          <div>
            {convertedPrizedInput?.map((num, idx) => {
              return <span key={idx}>{Number(num)}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="board-game">
        {games?.map((numberingGame, indexGame) => {
          let correctNumbers = 0;

          const result = (
            <div className="game" key={indexGame}>
              <span>Game {indexGame + 1}</span>
              <div>
                {numberingGame.map((num, indexNum) => {
                  const prizedNumber = convertedPrizedInput.find(
                    (prize) => prize === num
                  );

                  if (prizedNumber) correctNumbers++;

                  return (
                    <span
                      key={indexNum}
                      className={prizedNumber ? "prized" : ""}
                    >
                      {num}
                    </span>
                  );
                })}
              </div>
              <span>Correct: {correctNumbers}</span>
            </div>
          );

          // const i = correctNumbers as unknown;
          // const newStats = stats[i as keyof typeof stats];

          // setStats((oldStats) => ({ ...oldStats, [i]: newStats }));

          return result;
        })}
      </div>
      <div className="menus">
        <button>Save</button>
        <button
          onClick={() => {
            setGames((games) => {
              if (games) return [...games, generateGame()];
              return [generateGame()];
            });
          }}
        >
          Generate
        </button>
      </div>
    </Container>
  );
};
