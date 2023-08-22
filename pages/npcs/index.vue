<script setup lang="ts">
import { NpcsResponse } from 'types';

const { data } = await useFetch<NpcsResponse>(`/api/npcs`)
</script>
<template>
  <div>
    Npcs
    <table v-if="data">
      <tbody>
        <tr v-for="(npc) in data.npcs">
          <td>{{ npc.id }}</td>
          <td>
            <NuxtLink :to="`/npcs/${npc.id}-${slugify(npc.name)}`">
              {{ npc.name }}
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
