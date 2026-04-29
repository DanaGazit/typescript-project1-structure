# PPL - Home Assignment 1 (Spring 2026)

This repository contains my solution for the first assignment in the **Principles of Programming Languages (PPL)** course at Ben-Gurion University of the Negev.

## Project Overview
The assignment focuses on the transition from imperative to functional programming, using TypeScript and L3 (a subset of Scheme).

### Content:
* **Part 1: Theoretical Questions** - Exploration of programming paradigms (Imperative, OOP, Functional) and type analysis.
* **Part 2: Functional Programming in TypeScript** - Implementing functions using pure functional constructs and the Ramda library (e.g., `countVowels`, `isPalindrome`, `treeToSentence`).
* **Part 3: Introduction to Monads** - Working with the `Result<T>` monad to handle computations that may fail.
* **Part 4: Programming in L3** - Implementing recursive procedures in L3, including list manipulations and deep-reverse.

## Getting Started

### Prerequisites
* Node.js installed on your machine.
* npm (Node Package Manager).

### Installation
1. Clone the repository to your local machine.
2. Open a command prompt in the project folder.
3. Run the following command to install dependencies (including Jest and Ramda):
   ```bash
   npm install
   Running Tests
This project uses Jest for automated testing. To run the tests, use:

Bash
npm test
Project Structure
The submission follows the required structure:

part1.md: Solution for theoretical questions.

src/part2.ts: Functional programming implementations.

src/part3.ts: Monad-based logic.

src/part4.l3: L3 procedures and contracts.

tests/: Directory containing the test files for each part.

Important Notes
Adheres to the "strict" mode of the TypeScript compiler (tsc).

The project follows strict functional constraints: no mutation (no push, pop, etc.) and a focus on pure functions.

L3 code includes signatures, purposes, and pre-conditions for all procedures.

Course: Principles of Programming Languages (2026)
