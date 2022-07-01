import type { GetServerSideProps, NextPage } from 'next';
import { PageModal } from '../modals/pages';
import connectDB from '../middleware/mongodb';
import { GetServerSidePropsContext } from 'next/types';
import BlockRenderer from '../components/renderer/BlockRenderer';

type DefaultProps = {
	route: {
		path: string
	},
	content: {
		[key: string]: any
	}[]
}

const Default: NextPage<DefaultProps> = (props: DefaultProps) => {
	return (
		<h1 className=''>
			Hello world!
			{
				props.content.map(e => {
					const key = Object.keys(e)[0];
					console.log(key);
					return <BlockRenderer data={e[key]} id={key} />;
				})
			}
		</h1>
	);
};

type PageProps = {
	pageProps: {
		route: {
			path: string
		},
		content: any
	}
}

export const getServerSideProps: GetServerSideProps = connectDB(async (ctx: GetServerSidePropsContext) => {
	const result = await PageModal.findOne({ project: 'flow-fast', 'paths.path': ctx.req.url }).lean();
	if (!result) {
		ctx.res.statusCode = 404;
		return {
			notFound: true,
			redirect: {
				destination: '/',
				permanent: 410,
			},
		};
	}
	return {
		props: {
			route: {
				path: result.paths.find((e: any) => e.language = ctx.locale ?? 'default')?.path,
			},
			content: result.blocks,
		},
	};
});


export default Default;
