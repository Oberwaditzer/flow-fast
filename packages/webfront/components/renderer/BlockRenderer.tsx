import React, { Suspense } from 'react';
import { blocks } from '../../blocks/blocks';
import classNames from 'classnames';

type BlockRendererProps = {
	data: {
		isFullWidth: boolean
	},
	id: string
}


const BlockRenderer = ({ data, id }: BlockRendererProps) => {
	const Component = blocks[id] ?? blocks.fallback;
	if (!Component) {
		return null;
	}
	return (
		<div className={classNames('w-full', {
			'px-8': !data.isFullWidth,
		})}>
			<Suspense fallback={<p>Loading...</p>}>
				<Component {...data} />
			</Suspense>
		</div>
	);
};

export default BlockRenderer;