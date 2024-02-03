<template>
  <q-item
    clickable
    v-ripple
    @click="$emit('click')"
    :active="$route.name === 'chat' && $route.params.uuid === uuid"
  >
    <q-item-section avatar>
      <q-avatar color="primary" text-color="white">
        {{ alias.charAt(0) }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">
        {{ alias }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label caption>
        {{ date.formatDate(mtime, 'HH:mm') }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { date } from 'quasar';

defineProps<{
  uuid: string;
  alias: string;
  mtime: Date;
}>();

defineEmits<{
  (e: 'click'): void;
}>();
</script>
