import React, { FC } from 'react';

type HeadlineProps = {
	text: string
}

const Headline: FC<HeadlineProps> = ({text}) => {
	return <h1>{text}</h1>;
};

export default Headline;