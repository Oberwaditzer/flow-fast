import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PageDataContext } from '../components/contexts/PageDataProvider';
import { AppPropsWithLayout } from '../types/pages/NextPageWithLayout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}
	return (
		<PageDataContext.Provider value={{ pageProps }}>
			<Component {...pageProps} />
		</PageDataContext.Provider>
	);
}

export default MyApp;
