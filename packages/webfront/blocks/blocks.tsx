import dynamic from 'next/dynamic';
import { ComponentType, ElementType, ReactElement, ReactNode } from 'react';

import { Blocks } from '@flow-fast/mainstage/dist';


const Fallback = dynamic(() => import('./components/Fallback'), {
	loading: () => <p>Loading...</p>,
});

const blocks: {
	[key: string]: ElementType;
} = {
	fallback: Fallback,
	...Blocks
};

export { blocks };