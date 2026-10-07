# Landing website

A responsive site for Landing, built with Next.js App Router, TypeScript, Tailwind CSS, and pnpm. Landing is the company; SafeSock is its sensor-based recovery product. The navigation links to Product, Solution, Devices, Schedule, and About pages.

The Product page includes a load-signal illustration adapted from the previous SafeSock site. The Devices page uses its product mark and demo video. The visualizations are illustrative and do not show live patient data.

## Svelte animations

The site can mount Svelte 5 components alongside React through `components/SvelteIsland.tsx`. Svelte, Motion SV, and the Svelte webpack loader are installed. The Svelte Animations collection is a component registry: copy a chosen component and its listed dependencies from the [registry](https://sv-animations.vercel.app/) into `src/lib/` when needed, then load it in a React client component with `SvelteIsland`. The existing pages do not load animation code.

For example, in a React client component:

```tsx
"use client";

import SvelteIsland from "@/components/SvelteIsland";

const loadAnimation = () => import("$lib/components/animation/Ready.svelte");

export default function AnimationExample() {
  return <SvelteIsland load={loadAnimation} props={{ label: "Hello" }} />;
}
```

Run `pnpm check:svelte` to check Svelte components.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

To verify or serve the production build:

```bash
pnpm build
pnpm start
```
