<script lang="ts">
  import { motion } from "motion-sv";

  let { label = "Svelte animations ready" }: { label?: string } = $props();
  const AnimatedText = motion.span;
</script>

<AnimatedText initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  {label}
</AnimatedText>
