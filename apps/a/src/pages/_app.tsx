import '@/styles/global.css';

import type { AppProps } from 'next/app';

console.log(1);
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
