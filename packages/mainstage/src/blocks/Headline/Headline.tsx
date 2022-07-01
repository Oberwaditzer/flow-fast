import React, { FC } from 'react';
import classNames from 'classnames';
import { BasicComponentProps } from '../../types';

type HeadlineProps = BasicComponentProps & {
	text: string
	color: string
}

const Headline: FC<HeadlineProps> = ({ text, color, isFullWidth }) => {
	return (
		<div className={classNames({
			'w-screen': isFullWidth,
		})}>
			<h1 className={classNames('text-3xl', {
				'text-blue-500': color === 'blue',
				'text-red-500': color === 'red',
				'text-white': color === 'white',
				'text-black': color === 'black',
			})}>{text}</h1>
		</div>
	);
};

export default Headline;