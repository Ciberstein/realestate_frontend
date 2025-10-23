import { createSlice } from '@reduxjs/toolkit';
import appError from '../../utils/appError';
import api from '../../api/axios';

const propertieSlice = createSlice({
  name: 'properties',
  initialState: [],
  reducers: {
    setProperties: (state, action) => action.payload,
  },
});

export const { setProperties } = propertieSlice.actions;

export default propertieSlice.reducer;

export const propertiesThunk =
  () => async (dispatch) => {
    const url = '/api/properties';
    await api
      .get(url)
      .then((res) => dispatch(setProperties(res.data)))
      .catch((err) => appError(err))
  };
