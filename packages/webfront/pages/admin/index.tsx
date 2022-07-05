import type { NextPage } from 'next';
import { Sidebar } from '../../components/Navigation/Sidebar/Sidebar';
import { NextPageWithLayout } from '../../types/pages/NextPageWithLayout';
import { Component, ReactElement } from 'react';
import Head from 'next/head';

const Admin: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Admin</title>
			</Head>
			<p>Admin Dashboard</p>
		</>
	);
};

const AdminBasicLayout = (page: ReactElement) => {
	return (
		<div className={'h-screen flex'}>
			<Sidebar />
			{page}
		</div>
	);
};

Admin.getLayout = AdminBasicLayout;

export { AdminBasicLayout };

export default Admin;
