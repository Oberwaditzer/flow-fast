import { PageModal } from '../../modals/pages';

const GetStaticPages = async () => {
	const result = await PageModal.aggregate([
		{
			$match: {
		 		project: 'flow-fast',
				level: 0
			}
		},
		{
			$graphLookup: {
				from: 'pages',
				startWith: "$children",
				connectFromField: 'children',
				connectToField: '_id',
				as: 'pages',
			}
		}
	]);
	return JSON.parse(JSON.stringify(result));
};

const GetStaticPagesCount = async () => {
	const result = await PageModal.find({ project: 'flow-fast'}).lean();
	return result.length;
}

export { GetStaticPages, GetStaticPagesCount };