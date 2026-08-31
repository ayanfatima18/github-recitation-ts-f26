// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacciImport from "./fib";

// fib.ts is untyped, so declare the expected shape here instead of editing it
const fibonacci = fibonacciImport as (n: number) => number;

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN: number = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
