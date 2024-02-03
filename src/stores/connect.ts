import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useSessionStorage } from '@vueuse/core';
import { v4 as uuid } from 'uuid';

export const useConnectStore = defineStore('connect', () => {
  const connects = useSessionStorage('connects', [] as PeerConnect[]);

  function add(params: { id: string; alias: string; key: number }) {
    connects.value = [
      ...connects.value,
      {
        id: params.id,
        uuid: uuid(),
        alias: params.alias,
        sk: '',
        pk: '',
        status: ConnectStatus.Pending,
        ctime: new Date(),
        mtime: new Date(),
      },
    ];
  }

  function get(uuid: string) {
    const conn = connects.value.find((c) => c.uuid === uuid);
    if (conn) {
      return summary(conn);
    }
    return void 0;
  }

  return {
    add,
    get,
    connects: computed<PeerConnectSummary[]>(() => connects.value.map(summary)),
  };
});

export interface PeerConnect {
  id: string;
  uuid: string;
  alias: string;
  pk: string;
  sk: string;
  status: ConnectStatus;
  ctime: Date;
  mtime: Date;
}

export enum ConnectStatus {
  Pending = 'Pending',
  Connected = 'Connected',
  Disconnected = 'Disconnected',
}

export type PeerConnectSummary = Pick<
  PeerConnect,
  'uuid' | 'alias' | 'status' | 'ctime' | 'mtime'
>;

function summary(connect: PeerConnect): PeerConnectSummary {
  return {
    uuid: connect.uuid,
    alias: connect.alias,
    status: connect.status,
    ctime: connect.ctime,
    mtime: connect.mtime,
  };
}
