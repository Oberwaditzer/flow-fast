import type { NextPage } from 'next';
import Admin, { AdminBasicLayout } from '../../index';
import Head from 'next/head';
import { NextPageWithLayout } from '../../../../types/pages/NextPageWithLayout';
import { GetStaticPages, GetStaticPagesCount } from '../../../../backend/DbQueries/GetStaticPages';
import { useState } from 'react';

type PageProps = {
	static: {
		count: number,
		pages: any[]
	}
}

const Page: NextPageWithLayout<PageProps> = (props, context) => {
	const [selectedPage, setSelectedPage] = useState(props.static.pages?.[0]);
	return (
		<>
			<Head>
				<title>Static Pages</title>
			</Head>
			<div className={'grid grid-cols-3 divide-x divide-gray-200 h-full'}>
				<div className={'p-8'}>
					<div className={'flex flex-row items-center'}>
						<h1 className={'font-semibold text-2xl mr-4'}>Your pages</h1>
						<p>({props.static.count})</p>
					</div>
					<div className={'divide-y divide-gray-200 '}>
						{
							props.static.pages.map((page, index) => <RenderArrayElement key={index} page={page}
																											setSelectedPage={setSelectedPage}
																											level={0} />)
						}</div>
				</div>
				<div className={'col-span-2 p-8'}>
					{JSON.stringify(selectedPage)}
				</div>
			</div>
		</>
	);
};

const RenderArrayElement = (props: any) => {
	return (
		<>
			<div
				key={props.index}
				className={'bg-white flex flex-row items-center p-2 py-4 hover:bg-gray-200 hover:cursor-pointer'}
				style={{
					marginLeft: props.level * 20,
				}}
				onClick={() => props.setSelectedPage(props.page)}
			>
				<div className={'flex-1 flex flex-row'}>
					<p className={'font-bold mr-4'}>{props.page.name}</p>
					<p className={'font-light'}>{props.page.paths?.find(e => e.language === 'default')?.path}</p>
				</div>
				<span
					className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
											Active
										</span>
			</div>
			{
				props.page.pages?.map((page, index) => <RenderArrayElement key={index} page={page}
																							  setSelectedPage={props.setSelectedPage}
																							  level={props.level + 1} />)
			}
		</>
	);
};

Page.getLayout = AdminBasicLayout;

export async function getServerSideProps(context) {
	const staticPages = await GetStaticPages();
	const staticPagesCount = await GetStaticPagesCount();
	return {
		props: {
			static: {
				count: staticPagesCount,
				pages: staticPages,
			},
		},
	};
}

export default Page;
