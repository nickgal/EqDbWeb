<script setup lang="ts">
import { SpellsResponse } from 'types';

const { data } = await useFetch<SpellsResponse>(`/api/spells`)
</script>
<template>
  <div>
    Spells
    <table v-if="data">
      <tbody>
        <tr v-for="(spell) in data.spells">
          <td>{{ spell.id }}</td>
          <td>
            <NuxtLink :to="`/spells/${spell.id}-${slugify(spell.name)}`">
              {{ spell.name }}
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
