import React, { FC } from 'react';
import { BasicComponentProps } from '../../types';
import classNames from 'classnames';

type DividerProps = BasicComponentProps & {
	spacing?: 'small' | 'medium' | 'large'
}

const Divider: FC<DividerProps> = ({ isFullWidth, spacing }) => {
	return (
		<div className={classNames('w-full', {
			'w-screen': isFullWidth,
			'h-4': spacing === 'small',
			'h-8': spacing === 'medium',
			'h-16': spacing === 'large',
		})} />
	);
};

export default Divider;