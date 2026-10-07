"use client";

import SvelteIsland from "@/components/SvelteIsland";

const loadRecoverySignals = () => import("@/src/lib/components/animation/RecoverySignals.svelte");

export default function RecoverySignalIsland() {
  return <SvelteIsland load={loadRecoverySignals} />;
}
