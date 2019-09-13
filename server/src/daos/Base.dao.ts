import mongoose, {
    ModelUpdateOptions, Query, SaveOptions,
} from 'mongoose';

/* eslint-disable @typescript-eslint/no-explicit-any */
export class BaseDao <T extends mongoose.Document> {
    constructor(private readonly mongooseModel: mongoose.Model<T>) {

    }

    async findByIds(ids: string[]): Promise<T[]> {
        return this.mongooseModel.find({
            _id: {
                $in: ids,
            },
        });
    }

    async findById(id: string): Promise<T> {
        return this.mongooseModel.findById(id);
    }

    async findOne(criteria: any): Promise<T> {
        return this.mongooseModel.findOne(criteria);
    }

    async find(criteria: any): Promise<T[]> {
        return this.mongooseModel.find(criteria);
    }

    async create(docs: any, options?: SaveOptions): Promise<T> {
        return this.mongooseModel.create(docs, options);
    }

    async updateOne(
        conditions: any, doc: any, options?: ModelUpdateOptions,
    ): Promise< Query<T> > {
        return this.mongooseModel.updateOne(conditions, doc, options);
    }
}
