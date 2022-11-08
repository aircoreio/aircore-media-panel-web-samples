<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import {
  createClientWithPublishableKey,
  type Client,
} from "@aircore/aircore-panel-core";
import { MediaPanel, type MediaPanelType } from "@aircore/aircore-media-panel";

const channelId = "YOUR_CHANNEL_ID";
const userId = "YOUR_USER_ID" + Math.random();
const publishableApiKey = import.meta.env.VITE_PUBLISHABLE_API_KEY as string; // get your api key on https://developer.aircore.io

let myMediaPanel: MediaPanelType | null = null;
let client: Client | null = null;

onMounted(() => {
  client = createClientWithPublishableKey(publishableApiKey, userId);
  client.setUserDisplayName("John Doe");
  client.setUserAvatarUrl("https://unsplash.it/200/200");
  client.connect(channelId);

  myMediaPanel = MediaPanel("#my-media-panel", {
    client,
    channelId,
  });
});

onBeforeUnmount(() => {
  myMediaPanel?.destroy();
  client?.disconnect(channelId);
});
</script>

<template>
  <div id="my-media-panel" />
</template>
