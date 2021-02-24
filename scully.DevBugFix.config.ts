import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "DevBugFix",
  outDir: './docs',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
