<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { DialogDescription, type DialogDescriptionProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DialogDescription
    :class="cn('text-sm text-slate-500 dark:text-slate-400', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>
