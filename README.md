# Neon Snake from One Prompt

A tiny browser game built by an AI agent from a single prompt, for the
make.fun bounty **"The agent builds a game from one prompt"**.

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node 22](https://img.shields.io/badge/Node-22-green.svg)](https://nodejs.org/)

## The prompt

```
Build a tiny browser game in a single HTML file: Neon Snake. A glowing
snake eats orbs, grows longer and faster, dies on walls or its own tail.
Steer with arrow keys or WASD. Score and best score on screen, game-over
screen with restart. No libraries, no images — just code.
```

## Play

Open `game.html` in any browser. That is the whole game: one
self-contained HTML file, no libraries, no images, no network.

Or run the program:

```sh
node main.ts
```

`main.ts` (Node 22, stdlib only) reads `game.html` next to it and writes it
to `$MAKEFUN_OUTPUT_DIR/game.html` (default `./output`). It copies the file
byte for byte, so the output is deterministic: two runs produce identical
bytes.

## Controls

- **Arrow keys / WASD** to steer
- **Space / Enter / click** to restart after game over

## Rules

- Eat the pulsing orb: **+10 points**, the snake grows one segment and gets
  a little faster (8 steps/s, +0.25 per orb, max 16).
- Die on a wall or on your own tail. The tail cell is safe on a move where
  it vacates, exactly like classic Snake.
- Score and best score stay on screen; the best score is saved in
  `localStorage`.

## The video

The agent's build is on X: the prompt, the agent working, and the game
being played, ending on make.fun's referral card. Play code:
`makefun-gopher-hamster-map`.

---

Built for [make.fun](https://make.fun/r/zyj0zszc) — play it, build it,
get paid.
