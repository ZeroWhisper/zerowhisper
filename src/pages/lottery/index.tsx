import lz from "lz-string";

import { Container } from "./style";
import { useEffect, useState } from "react";

type GameType = number[];

export const LotteryPage = () => {
  const [games, setGames] = useState<GameType[]>();

  const [gameConfig, setGameConfig] = useState<{
    maxSelectedNumbers: number;
    maxGameNumbers: number;
    numberRemoved: number;
  }>({
    maxSelectedNumbers: 15,
    maxGameNumbers: 25,
    numberRemoved: 0,
  });

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

    for (let i = 0; i < gameConfig.maxSelectedNumbers; ) {
      const newNumber =
        Math.round(Math.random() * gameConfig.maxGameNumbers) + 1;

      const alreadyExist = gameArray.find(
        (placedNumber) => placedNumber === newNumber
      );

      if (!!gameConfig.numberRemoved && gameConfig.numberRemoved === newNumber)
        continue;

      if (!alreadyExist && newNumber > 0) {
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

  const handleGeneration = () => {
    setGames((games) => {
      if (games) return [...games, generateGame()];
      return [generateGame()];
    });
  };

  const handleSaveGames = () => {
    const toBeSaved = lz.compress(lz.compressToBase64(JSON.stringify(games)));
    localStorage.setItem("loterryGames", toBeSaved);
  };

  const handleLoadGames = () => {
    const toBeRestored = localStorage.getItem("loterryGames") || "";
    const descompressed = lz.decompressFromBase64(lz.decompress(toBeRestored));
    const obj = JSON.parse(descompressed);
    setGames(obj);
  };

  return (
    <Container>
      <div className="config-input">
        <h2>Lottery</h2>
        <div className="inputs">
          <div>
            <label htmlFor="prize">Max Game Numbers</label>
            <input
              type="number"
              name="maxGameNumbers"
              value={gameConfig.maxGameNumbers}
              onChange={(e) => {
                setGameConfig((oldConfig) => {
                  const maxGameNumbers = Number(e.target.value);
                  return { ...oldConfig, maxGameNumbers };
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="prize">Max Numbers</label>
            <input
              type="number"
              name="maxSelectedNumbers"
              value={gameConfig.maxSelectedNumbers}
              onChange={(e) => {
                setGameConfig((oldConfig) => {
                  const maxSelectedNumbers = Number(e.target.value);
                  return { ...oldConfig, maxSelectedNumbers };
                });
              }}
            />
          </div>
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
            <label htmlFor="prize">Number Removed</label>
            <input
              type="text"
              name="numberRemoved"
              value={gameConfig.numberRemoved}
              onChange={(e) => {
                setInputPrize(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="many">How Many</label>
            <input type="number" name="many" />
          </div>
          <div>
            <span>Total Games: {games?.length || "0"}</span>
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

          return result;
        })}
      </div>
      <div className="menus">
        <button onClick={handleSaveGames}>Save</button>
        <button onClick={handleGeneration}>Generate</button>
        <button onClick={handleLoadGames}>Load / Reset</button>
        <button>Clean</button>
      </div>
    </Container>
  );
};
