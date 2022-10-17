import { MediaPanel } from '@aircore/aircore-media-panel';
import { createClientWithPublishableKey } from '@aircore/aircore-panel-core';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const channelId = 'YOUR_CHANNEL_ID';
const userId = 'YOUR_USER_ID' + Math.random();
const publishableApiKey = process.env.NEXT_PUBLIC_PUBLISHABLE_API_KEY as string; // get your api key on https://developer.aircore.io

const Home: NextPage = () => {
  useEffect(() => {
    const client = createClientWithPublishableKey(publishableApiKey, userId)
    client.setUserDisplayName("John Doe");
    client.setUserAvatarUrl("https://unsplash.it/200/200");
    client.connect(channelId);

    const mediaPanel = MediaPanel(
      '#my-media-panel',
      {
        client,
        channelId,
      }
    );
    return () => {
      client.disconnect(channelId);
      mediaPanel.destroy()
    }
  }, []);

  return (
    <div className={styles.container}>
      <div id="my-media-panel" />
    </div>
  )
}

export default Home
