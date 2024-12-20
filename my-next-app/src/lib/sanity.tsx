// lib/sanity.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zc7zdda0',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

export default client;
