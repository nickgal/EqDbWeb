<script setup lang="ts">
import { ZonesResponse } from 'types';

const { data } = await useFetch<ZonesResponse>(`/api/zones`)
</script>
<template>
  <div>
    Factions
    <table v-if="data">
      <tbody>
        <tr v-for="(zone) in data.zones">
          <td>{{ zone.id }}</td>
          <td>
            <NuxtLink :to="`/zones/${zone.id}-${slugify(zone.longName)}`">
              {{ zone.longName }} ({{ zone.shortName }})
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
