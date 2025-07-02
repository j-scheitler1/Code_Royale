import type { Problem } from './types/problem';
import { twoSum } from './two-sum';
import { reverseLinkedList } from './reverse-linked-list';

interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  'two-sum': twoSum,
  'reverse-linked-list': reverseLinkedList,
};