import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
