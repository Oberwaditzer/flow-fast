import React, { ReactElement, ReactNode } from 'react';
import { blocks } from '../../blocks/blocks';
import { NewHedline } from '@flow-fast/mainstage';

type BlockRendererProps = {
	data: any,
	id: string
}


const BlockRenderer = ({ data, id }: BlockRendererProps) => {
	const Component = blocks[id] ?? blocks.fallback;
	console.log(blocks)
	if (!Component) {
		return null;
	}
	return (
		<Component {...data} />
	);
};

export default BlockRenderer;