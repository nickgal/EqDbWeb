<script setup lang="ts">
import { ItemsResponse } from 'types';

const { data } = await useFetch<ItemsResponse>(`/api/items`)
</script>
<template>
  <div>
    Items
    <table v-if="data">
      <tbody>
        <tr v-for="(item) in data.items">
          <td><ItemIcon :item="item" /></td>
          <td>{{ item.id }}</td>
          <td>
            <NuxtLink :to="`/items/${item.id}-${slugify(item.name)}`">
              {{ item.name }}
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
