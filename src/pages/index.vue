<template>
  <q-page>
    <connects-drawer ref="leftDrawer" />

    <q-header elevated>
      <q-toolbar class="bg-grey-3 text-black">
        <q-btn
          round
          flat
          icon="keyboard_arrow_left"
          class="q-mr-sm"
          @click="leftDrawer?.toggle"
        />

        <span class="q-subtitle-1 q-pl-md">
          {{ currentConnect?.alias }}
        </span>
      </q-toolbar>
    </q-header>

    <router-view />

    <q-footer>
      <q-toolbar class="bg-grey-3 text-black row">
        <q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
        <q-input
          rounded
          outlined
          dense
          class="col-grow q-mr-sm"
          bg-color="white"
          v-model="message"
          placeholder="Type a message"
        />
        <q-btn round flat icon="mic" />
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script lang="ts" setup>
import ConnectsDrawer from 'src/components/ConnectsDrawer.vue';
import { useConnectStore } from 'src/stores/connect';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const message = ref('');
const route = useRoute();
const leftDrawer = ref<InstanceType<typeof ConnectsDrawer>>();

const connects = useConnectStore();
const currentConnect = computed(() =>
  route.name === 'chat'
    ? route.params.id
      ? connects.get(route.params.id as string)
      : void 0
    : undefined
);
</script>
