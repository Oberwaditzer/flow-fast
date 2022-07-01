import React, { createContext } from 'react';

type PageDataContextProps = {
	pageProps?: {}
}

const PageDataContext = createContext<PageDataContextProps>({});


export { PageDataContext };