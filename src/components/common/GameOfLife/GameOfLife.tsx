import { produce } from "immer";
import React, { useCallback, useEffect, useRef } from "react";

import { useState } from "react";

export default function GameOfLife () {
    const W = 100;
    const H = 200;
    const SPAWN_RATE = 1/4;
    const ITERATION_MS = 250;

    let [grid, setGrid] = useState(() => {
        let rows = [];

        for (let i = 0; i < W; i++) {
            let row = Array(H);

            for (let j = 0; j < H; j++) {
                const p = Math.random();
                
                row[j] = (p < SPAWN_RATE);
            }
            rows.push(row);    
        }

        return rows;
    });

    function isValid (x: number, y: number): boolean {
        return (
            x >= 0 && y >= 0 && x < W && y < H
        )
    }

    const runIteration = useCallback(() => {
        const ops = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1], 
        ]

        let now = Date.now();
        const diff = now - (startTime.current + (iter.current * ITERATION_MS))

        if (diff < 0) {
            setTimeout(runIteration, Math.min(-diff, 2));
        } else {
            iter.current++;

            setGrid((g) => {
                return produce(
                    g,
                    draftGrid => {
                        for (let i = 0; i < W; i++) {
                            for (let j = 0; j < H; j++) {
                                let aliveNbors = 0;

                                for (let d = 0; d < ops.length; d++) {
                                    const x1 = i + ops[d][0];
                                    const y1 = j + ops[d][1];

                                    if (isValid(x1, y1) && g[x1][y1]) {
                                        aliveNbors++;                                    
                                    }
                                }

                                if (
                                    (g[i][j] && (aliveNbors === 2 || aliveNbors === 3)) ||
                                    (!g[i][j] && (aliveNbors === 3))
                                ) {
                                    draftGrid[i][j] = true;
                                } else {
                                    draftGrid[i][j] = false;
                                }
                            }
                        }
                    }
                )
            })

            setTimeout(runIteration, ITERATION_MS - 5);
        }
    }, []);

    let startTime = useRef(-1);
    let iter = useRef(0);

    useEffect(() => {
        startTime.current = Date.now();
        runIteration();
    }, [runIteration])

    return (
    <div className="fixed h-full w-3/4 right-0 grid grid-cols-100 -z-50">
            {grid.map(
                (rows, i) => rows.map(
                    (isAlive, j) => (
                        <div key={`${i},${j}`} className={
                            ` aspect-square
                            bg-pastel-200
                            ${isAlive ? "opacity-25" : "opacity-0"}`
                        }>
                        </div>
                    )
                )
            )}
        </div>
    );
}
