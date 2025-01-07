import { GET, POST } from '@/web/common/api/request';
import {
  CreateTrainingUsageProps,
  GetTotalPointsProps
} from '@fastgpt/global/support/wallet/usage/api.d';
import type { PagingData, RequestPaging } from '@/types';
import type { UsageItemType } from '@fastgpt/global/support/wallet/usage/type';

export const getUserUsages = (data: RequestPaging) =>
  POST<PagingData<UsageItemType>>(`/proApi/support/wallet/usage/getUsage`, data);

export const getTotalPoints = (data: GetTotalPointsProps) =>
  POST<{ totalPoints: number; date: string }[]>(
    `/proApi/support/wallet/usage/getTotalPoints`,
    data
  );

export const postCreateTrainingUsage = (data: CreateTrainingUsageProps) =>
  POST<string>(`/support/wallet/usage/createTrainingUsage`, data);
