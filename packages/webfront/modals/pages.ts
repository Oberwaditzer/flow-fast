import mongoose, { Schema } from 'mongoose';


const PageEntrySchema = new Schema({
	language: { type: String, default: 'default' },
	path: { type: String, required: [true, 'A Page Entry needs a path'] },
});


const PageSchema = new Schema({
	project: { type: String, required: [true, 'A Page needs a project'] },
	name: { type: String, required: [true, 'A Page needs a name'] },
	paths: {
		type: [PageEntrySchema],
	},
	blocks: [Map],
});


export const PageModal = mongoose.models.Page || mongoose.model('Page', PageSchema);
