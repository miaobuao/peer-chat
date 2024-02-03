<template>
  <q-avatar v-bind="$attrs">
    {{ name?.charAt(0) ?? '' }}
  </q-avatar>
</template>

<script setup lang="ts">
import { QAvatarProps } from 'quasar';

defineProps<
  {
    name?: string;
  } & QAvatarProps
>();
</script>
