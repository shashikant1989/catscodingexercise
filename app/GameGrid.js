import React from "react";
import "./App.css";

const GameGrid = (props) => {
    const CATS = props.currentStateGrid;
    return (
      <div className={"tableRight"}>
        <div className={"table"}>
          {CATS.map(item => {
            return (
              <div className={"row"}>
                {item &&
                  item.map((cat, i) => {
                    return (
                      <div key={i} className={"column borderBlue"}>
                        {cat && (
                          <img
                            alt={cat}
                            height={90}
                          src={require(`../assets/cat_${cat}.png`)} 
                          />
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
        {props.isEndGame && <div className={"result"}>
          <div className={props.isWin ? "win" : "lose"}>
            {props.isWin ? "You win" : "You lost"}
          </div>
          <div className={"btnPlay"} onClick={props.restartGame}>Play Again</div>
        </div>} 
    </div>
    );
  }


export default GameGrid;
