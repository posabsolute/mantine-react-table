import { useMemo } from 'react';
import {
  MRT_Table, //import alternative sub-component if we do not want toolbars
  useMantineReactTable,
} from 'mantine-react-table';
import { useMantineTheme } from '@mantine/core';
import { data } from './makeData';

export const Example = () => {
  const { colorScheme } = useMantineTheme();

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: true,
      withBorder: colorScheme === 'light',
      style: {
        'thead > tr': {
          backgroundColor: 'inherit',
        },
        'thead > tr > th': {
          backgroundColor: 'inherit',
        },
        'tbody > tr > td': {
          backgroundColor: 'inherit',
        },
      },
    },
  });

  //using MRT_Table instead of MantineReactTable if we do not want any of the toolbar features
  return <MRT_Table table={table} />;
};

export default Example;
