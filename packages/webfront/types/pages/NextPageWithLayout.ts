import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export type { NextPageWithLayout, AppPropsWithLayout };