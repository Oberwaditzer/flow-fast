import React, { Suspense, ReactNode } from 'react';
import { blocks } from '../../blocks/blocks';
import { NewHedline } from '@flow-fast/mainstage';
import { Headline } from '@flow-fast/mainstage/dist';

type BlockRendererProps = {
	data: any,
	id: string
}


const BlockRenderer = ({ data, id }: BlockRendererProps) => {
	const Component = blocks[id] ?? blocks.fallback;
	if (!Component) {
		return null;
	}
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Component {...data} />
		</Suspense>
	);
};

export default BlockRenderer;