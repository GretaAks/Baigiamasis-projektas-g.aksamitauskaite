import React, { useContext } from 'react';
import {
  Typography,
  Paper,
  Divider,
  Box,
  Pagination,
} from '@mui/material';
import { ProductContext } from '../contexts/product-context';

const ServicePageProductsHeader = () => {
  const {
    total, page, limit, categoryName, changePage,
  } = useContext(ProductContext);

  const handlePaginationChange = (_, pageClicked) => {
    changePage(pageClicked);
  };

  let rangeString = '';
  if (total > limit) {
    const from = (page - 1) * limit + 1;
    const to = Math.min(limit * page, total);
    rangeString = `${from}-${to}`;
  }
  const searchResultString = `${categoryName} ${rangeString} (total: ${total})`;

  return (
    <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">{searchResultString}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {total > limit && (
          <>
            <Pagination
              count={Math.ceil(total / limit)}
              page={Number(page)}
              variant="outlined"
              shape="rounded"
              onChange={handlePaginationChange}
              color="success"
            />
            <Divider orientation="vertical" sx={{ mx: 1 }} />
          </>
        )}

      </Box>
    </Paper>
  );
};

export default ServicePageProductsHeader;
