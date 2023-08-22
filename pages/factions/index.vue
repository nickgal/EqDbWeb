<script setup lang="ts">
import { FactionsResponse } from 'types';

const { data } = await useFetch<FactionsResponse>(`/api/factions`)
</script>
<template>
  <div>
    Factions
    <table v-if="data">
      <tbody>
        <tr v-for="(faction) in data.factions">
          <td>{{ faction.id }}</td>
          <td>
            <NuxtLink :to="`/factions/${faction.id}-${slugify(faction.name)}`">
              {{ faction.name }}
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
