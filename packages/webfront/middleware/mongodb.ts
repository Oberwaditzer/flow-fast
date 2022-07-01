import mongoose from 'mongoose';
import { GetServerSidePropsContext } from 'next/types';

type MongooseMiddleware = (req: GetServerSidePropsContext) => Promise<any>;

const connectDB = (handler: MongooseMiddleware) => async (req: GetServerSidePropsContext) => {
	if (mongoose.connections[0].readyState) {
		// Use current db connection
		return handler(req);
	}
	console.log(process.env.MONGODB_URI);
	// Use new db connection
	await mongoose.connect(process.env.MONGODB_URI!, {
		dbName: 'flow-fast',
	});
	return handler(req);
};

export default connectDB;