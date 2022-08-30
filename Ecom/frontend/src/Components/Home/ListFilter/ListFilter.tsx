import * as React from 'react';
import Chip from '@mui/material/Chip';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import Stack from '@mui/material/Stack';

interface Props {
    filter:{
        color:string | undefined
        tags:string | undefined
        size:string | undefined 
    }
    setFilter:Dispatch<SetStateAction<{ color: string|undefined; size: string|undefined; tags: string|undefined; }>>
}
export default function ListFilter({filter, setFilter}:Props) {
  const handleDelete = (text:string) => {
    if(text === 'COLOR'){
        setFilter(filter={...filter, color:undefined})
    }
    if(text === 'TAGS'){
        setFilter(filter={...filter, tags:undefined})
    }
    if(text === 'SIZE'){
        setFilter(filter={...filter, size:undefined})
    }
  };
if(filter.color?.indexOf('_') !== -1 && filter.color !== undefined){
    let text = filter.color.split('_')
    return (
        <Stack direction="row" spacing={1}>
        {
            filter.color?(
                <Chip label={filter.color.toUpperCase()} color='info' onDelete={(e)=>handleDelete('COLOR')} />
            ):null
        }
        {
            filter.tags?(
                <Chip label={filter.tags.toUpperCase()} color='info' onDelete={(e)=>handleDelete('TAGS')} />
            ):null
        }
        {
            filter.size?(
                <Chip label={filter.size.toUpperCase()} color='info' onDelete={(e)=>handleDelete('SIZE')} />
            ):null
        }
    </Stack>
    )
}else{
    return (
      <Stack direction="row" spacing={1}>
          {
              filter.color?(
                  <Chip label={filter.color.toUpperCase()} color='info' onDelete={(e)=>handleDelete('COLOR')} />
              ):null
          }
          {
              filter.tags?(
                  <Chip label={filter.tags.toUpperCase()} color='info' onDelete={(e)=>handleDelete('TAGS')} />
              ):null
          }
          {
              filter.size?(
                  <Chip label={filter.size.toUpperCase()} color='info' onDelete={(e)=>handleDelete('SIZE')} />
              ):null
          }
      </Stack>
    );
}
}