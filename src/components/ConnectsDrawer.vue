<template>
  <q-drawer
    v-model="open"
    show-if-above
    bordered
    :breakpoint="690"
    class="flex flex-col"
  >
    <q-toolbar class="bg-grey-3">
      <q-avatar class="cursor-pointer">
        <img src="../assets/chat-icon.svg" />
      </q-avatar>
      <span class="q-subtitle-1 q-pl-md">PeerChat</span>

      <q-space />

      <q-btn round flat icon="close" @click="toggle" />
    </q-toolbar>

    <q-toolbar class="bg-grey-2">
      <q-input
        rounded
        outlined
        dense
        class="w-full"
        bg-color="white"
        v-model="search"
        :placeholder="$t('search_or_start_new_conversation')"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-toolbar>

    <q-scroll-area class="flex-1">
      <q-list>
        <chat-list @click="(e) => $emit('select', e)" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ChatList from './ChatList.vue';

defineEmits<{
  (e: 'select', uuid: string): void;
}>();

const open = ref(false);
const search = ref('');

function toggle() {
  open.value = !open.value;
}

defineExpose({
  open,
  toggle,
});
</script>
