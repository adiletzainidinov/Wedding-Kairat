import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isWelding: false,
};

export const weldingSlice = createSlice({
  name: 'welding',
  initialState,
  reducers: {},
});

// export const {} => weldingSlice.actions