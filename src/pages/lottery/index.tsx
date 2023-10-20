import { Container } from "./style";

export const LotteryPage = () => {
  const generateGame = () => {
    const gameArray: number[] = [];

    for (let i = 0; i < 25; ) {
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

  const games = [
    generateGame(),
    generateGame(),
    generateGame(),
    generateGame(),
  ];

  return (
    <Container>
      <div>
        <h2>Lottery</h2>
      </div>
      <div className="board-game">
        {games.map((numberingGame, indexGame) => {
          return (
            <div className="game" key={indexGame}>
              <span>Game {indexGame}</span>
              <div>
                {numberingGame.map((num, indexNum) => {
                  return <span key={indexNum}>{num}</span>;
                })}
              </div>
            </div>
          );
        })}

        {/* <div className="game">
          <span>Game</span>
          <div>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
          </div>
        </div> */}

        {/* <div className="game">
          <span>Game</span>
          <div>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
          </div>
        </div> */}
      </div>
      <div>
        <button>Generate Game</button>
      </div>
    </Container>
  );
};
