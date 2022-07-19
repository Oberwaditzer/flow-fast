import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

type NextPageWithLayout<T> = NextPage<T> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<T> = AppProps<T> & {
	Component: NextPageWithLayout<T>
}

export type { NextPageWithLayout, AppPropsWithLayout };