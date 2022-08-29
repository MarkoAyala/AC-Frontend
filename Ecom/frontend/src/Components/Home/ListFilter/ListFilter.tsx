import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface Props {
    filter:{
        color:string | undefined
        tags:string | undefined
        size:string | undefined 
    }
}
export default function ListFilter({filter}:Props) {
  const handleDelete = () => {
  };

  return (
    <Stack direction="row" spacing={1}>
        {
            filter.color?(
                <Chip label={filter.color.toUpperCase()} color='info' onDelete={handleDelete} />
            ):null
        }
        {
            filter.tags?(
                <Chip label={filter.tags.toUpperCase()} color='info' onDelete={handleDelete} />
            ):null
        }
        {
            filter.size?(
                <Chip label={filter.size.toUpperCase()} color='info' onDelete={handleDelete} />
            ):null
        }
    </Stack>
  );
}