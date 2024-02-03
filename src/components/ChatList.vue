<template>
  <q-list>
    <chat-item
      v-for="c in connects.connects"
      :key="c.uuid"
      :alias="c.alias"
      :uuid="c.uuid"
      :mtime="c.mtime"
      @click="$emit('click', c.uuid)"
    ></chat-item>
  </q-list>
</template>

<script setup lang="ts">
import { useConnectStore } from 'src/stores/connect';
import ChatItem from './ChatItem.vue';

defineEmits<{
  (e: 'click', uuid: string): void;
}>();

const connects = useConnectStore();
</script>
