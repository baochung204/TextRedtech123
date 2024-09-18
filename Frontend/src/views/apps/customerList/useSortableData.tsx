import { useState, useMemo } from 'react';

interface UseSortableDataProps<T> {
  items: T[];
  initialSortBy?: keyof T;
  initialSortOrder?: 'asc' | 'desc';
}

interface UseSortableDataResult<T> {
  sortedItems: T[];
  sortBy: keyof T;
  sortOrder: 'asc' | 'desc';
  handleSortRequest: (property: keyof T) => void;
}

function useSortableData<T>({
  items,
  initialSortBy = 'id',
  initialSortOrder = 'asc',
}: UseSortableDataProps<T>): UseSortableDataResult<T> {
  const [sortBy, setSortBy] = useState<keyof T>(initialSortBy);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(initialSortOrder);

  const handleSortRequest = (property: keyof T) => {
    const isAscending = sortBy === property && sortOrder === 'asc';
    setSortOrder(isAscending ? 'desc' : 'asc');
    setSortBy(property);
  };

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [items, sortBy, sortOrder]);

  return { sortedItems, sortBy, sortOrder, handleSortRequest };
}

export default useSortableData;
