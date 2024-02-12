<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput v-bind="forwardedProps" :class="cn('flex w-12 h-12 font-medium text-center rounded-md border border-input bg-background text-sm ring-offset-pink-500 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class)" />
</template>
