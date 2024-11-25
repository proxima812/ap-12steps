import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2023-03-20","projectId":"0v6rg1ms","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
