import type { NextPage } from 'next';
import Admin, { AdminBasicLayout } from '../../index';
import { NextPageWithLayout } from '../../../../types/pages/NextPageWithLayout';
import Head from 'next/head';

const Page: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Static Pages</title>
			</Head>
			<h1>
				Static Pages
			</h1>
		</>
	);
};

Page.getLayout = AdminBasicLayout;

export default Page;
