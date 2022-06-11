import { defineManifest } from '@crxjs/vite-plugin';

export default defineManifest({
  name: 'chrome-vite-svelte-ts-sass-boilerplate',
  version: '0.0.1',
  manifest_version: 3,
  icons: {
    '16': 'icons/16.png',
    '32': 'icons/32.png',
    '48': 'icons/48.png',
    '128': 'icons/128.png',
  },
  action: {
    default_popup: 'popup.html',
  },
  background: {
    service_worker: 'src/background.ts',
    type: 'module',
  },
  content_scripts: [
    {
      js: ['src/content.ts'],
      matches: ['http://*/*', 'https://*/*'],
    },
  ],
  permissions: [],
});
