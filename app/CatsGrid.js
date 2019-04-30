import React from "react";
import "./App.css";

const CATS = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

const CatsGrid = (props) => {
    return (
      <div className={"tableLeft"}>
        <div className={"table"}>
          {CATS.map(item => {
            return (
              <div className={"row"}>
                {item.map(cat => {
                  return (
                    <div
                      key={cat}
                      onClick={() => props.onCatClick(cat)}
                      className={"column"}
                    >
                      <img
                        alt={cat}
                        className={'pointer'}
                        height={150}
                        src={require(`../assets/cat_${cat}.png`)} 
                        />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }


export default CatsGrid;
