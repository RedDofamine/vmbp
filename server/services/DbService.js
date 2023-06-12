module.exports = class DbService {
	constructor(model) {
		this.model = model;
	}
	async create(data) {
		if (!data) {
			throw new Error('No data included');
		}
		const createdData = await this.model.create(data);
		if (!createdData) {
			throw new Error('Data not saved');
		}
		return createdData;
	}
	async getById(id) {
		if (!id) {
			throw new Error('Id not included');
		}
		const data = await this.model.findById(id);
		if (!data) {
			throw new Error('No matches');
		}
		return data;
	}
	async getAll() {
		const data = await this.model.find();
		if (!data) {
			throw new Error('No matches');
		}
		return data;
	}
	async update(id, data) {
		if (!id) {
			throw new Error('Id not included');
		}
		if (!data) {
			throw new Error('Data not included');
		}
		const updatedData = await this.model.findByIdAndUpdate(id, data);
		if (!updatedData) {
			throw new Error('Update undone');
		}
		return updatedData;
	}
	async delete(id) {
		try {
			if (!id) {
				throw new Error('Id not included');
			};
			await this.model.findByIdAndDelete({ _id: id });
		} catch (err) {
			return err.message;
		}
	}
}