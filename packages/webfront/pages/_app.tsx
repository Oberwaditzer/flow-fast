import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PageDataContext } from '../components/contexts/PageDataProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PageDataContext.Provider value={{ pageProps }}>
			<Component {...pageProps} />
		</PageDataContext.Provider>
	);
}

export default MyApp;
