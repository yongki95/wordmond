import { User, TestHistoryModel } from '../../../models';
import { PaginateArgument, PaginateResult } from '../../../types';
import { Resolver } from '../../type';

const paginateTestHistory: Resolver<PaginateArgument, PaginateResult, User> = async ({ _id }, { query: _query, page, limit, sort }) => {
    page = Math.max(1, page);
    limit = Math.min(100, limit);

    const skip = limit * (page - 1);

    const query = {
      ..._query,
      user: _id,
    };
    
    try {
      const total = await TestHistoryModel.countDocuments(query);
      const data = await TestHistoryModel.find(query).skip(skip).limit(limit).sort(sort);

      return {
        success: true,
        total,
        data,
      };
    } catch (e: any) {
      return {
        success: false,
        error: e.message,
      };
    }
  };

export const userRelations = {
  paginateTestHistory,
};
