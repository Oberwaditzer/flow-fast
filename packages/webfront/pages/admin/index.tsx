import type { NextPage } from 'next';
import { Sidebar } from '../../components/Navigation/Sidebar/Sidebar';
import { NextPageWithLayout } from '../../types/pages/NextPageWithLayout';
import { Component, ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticPagesCount } from '../../backend/DbQueries/GetStaticPages';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';

type AdminProps = NextPageWithLayout & {
	static: {
		count: number
	}
}


const Admin: NextPageWithLayout = ( props, context) => {
	return (
		<>
			<Head>
				<title>Admin</title>
			</Head>
			<p>Admin Dashboard</p>
		</>
	);
};

const navigation = [
	{ name: 'Dashboard', icon: HomeIcon, href: '/admin' },
	{ name: 'Static Pages', icon: UsersIcon, href: '/admin/sites/static', count: 2 },
	{ name: 'Projects', icon: FolderIcon, href: '#', count: 4 },
	{ name: 'Calendar', icon: CalendarIcon, href: '#' },
	{ name: 'Documents', icon: InboxIcon, href: '#' },
	{ name: 'Reports', icon: ChartBarIcon, href: '#', count: 12, },
];



const AdminBasicLayout = (page: ReactElement) => {
	return (
		<div className={'h-screen flex'}>
			<Sidebar navigation={navigation} />
			{page}
		</div>
	);
};

Admin.getLayout = AdminBasicLayout;

export async function getServerSideProps(context) {
	return {
		props: {
			static: {
				count: await GetStaticPagesCount()
			}
		}
	}
}

export { AdminBasicLayout };

export default Admin;
