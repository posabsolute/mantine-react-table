import React from 'react';

//Import Mantine React Table and its Types
import { MantineReactTable } from 'mantine-react-table';

//Import Mantine React Table Translations
import { MRT_Localization_UK } from 'mantine-react-table/locales/uk';

//mock data
import { data } from './makeData';

const columns = [
  //column definitions...
  {
    accessorKey: 'firstName',
    header: "Ім'я",
  },
  {
    accessorKey: 'lastName',
    header: 'Прізвище',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: 'Вік',
  },
  //end
];

const Example = () => {
  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnOrdering
      enableEditing
      enablePinning
      enableRowActions
      enableRowSelection
      enableSelectAll={false}
      initialState={{ showColumnFilters: true, showGlobalFilter: true }}
      localization={MRT_Localization_UK}
    />
  );
};

export default Example;
