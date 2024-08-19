import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    deliverableId: 'D001',
    deliverables: 'Instagram Reel',
    deliverableName: 'Shampoo Reel',
    finalCreatorPrice: 50000,
    finalBrandPrice: 58000,
    deliverableApproved: true,
    contentPublished: true,
    postLink: 'http://abc.com',
  },
  {
    id: 2,
    deliverableId: 'D002',
    deliverables: 'Youtube Shorts',
    deliverableName: 'Shampoo Add',
    finalCreatorPrice: 300,
    finalBrandPrice: 600,
    deliverableApproved: false,
    contentPublished: false,
    postLink: 'http://abc.com',
  },
  {
    id: 3,
    deliverableId: 'D003',
    deliverables: 'Instagram Reel',
    deliverableName: 'Shampoo Reel',
    finalCreatorPrice: 150000,
    finalBrandPrice: 170000,
    deliverableApproved: true,
    contentPublished: true,
    postLink: 'http://def.com',
  },
  {
    id: 4,
    deliverableId: 'D004',
    deliverables: 'Youtube Shorts',
    deliverableName: 'Shampoo Video',
    finalCreatorPrice: 10000,
    finalBrandPrice: 12000,
    deliverableApproved: true,
    contentPublished: false,
    postLink: 'http://ghi.com',
  },
  ];

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    updateCell: (state, action) => {
      const { id, field, value } = action.payload;
      const row = state.find((item) => item.id === id);
      if (row) {
        row[field] = value;
      }
    },
  },
});

export const { updateCell } = tableSlice.actions;
export default tableSlice.reducer;
