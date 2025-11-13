# Elin BedSimulator

A simple web tool to calculate bed specifications in [Elin](https://en.ylion.org/).

## What is this?

BedSimulator helps you figure out the final quality of beds based on:
- **Bed type** (13 different beds)
- **Material used** (64 materials with different quality levels)
- **Crafting quality** (your skill level, 0-100)

Formula: `(5 + Bed Level + Material Quality) × (1 + 0.1 × Crafting Quality)`

## How to use

1. Run: `deno run --allow-net --allow-read server.ts`
2. Open `http://localhost:8000` in your browser
3. Select bed, material, and crafting quality
4. Click "計算" to see the result

## Requirements

- [Deno](https://deno.com/)

## Build

```bash
deno run --allow-read --allow-write bundle.ts
```

## Acknowledgments

- Game data from [Ylvapedia](https://ylvapedia.wiki/)
- Elin created by [noa猫](https://twitter.com/elocat)

## License

煮るなり焼くなり好きにしろライセンス - See LICENSE file

---

For Elin players. Made with Deno + TypeScript.