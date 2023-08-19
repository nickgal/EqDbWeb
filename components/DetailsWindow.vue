<template>
  <div class="details-window">
    <slot />
  </div>
</template>
<style>
.details-window {
  background-image: url('/ClassicChatBox.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Arial, Helvetica, sans-serif;
  font-size: smaller;

  height: 300px;
  padding: 55px 100px;
  box-sizing: border-box;
  aspect-ratio: 925 / 388;
}
.details-window .item-icon {
  float: right;
  padding: 10px;
  filter: drop-shadow(0 2px 5px #333);
}
</style>
