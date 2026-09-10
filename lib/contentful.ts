import { createClient } from 'contentful';

/**
 * Initialize a Contentful client using environment variables.
 * The required env vars are `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`.
 */
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
});
