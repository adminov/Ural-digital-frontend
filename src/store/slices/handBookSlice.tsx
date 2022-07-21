import {IAirportCountry, IAirportRegion, IAirportType} from "../../models/models"
import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";

interface HandBookState {
    loading: boolean
    types: IAirportType[]
    regions: IAirportRegion[]
    countries: IAirportCountry[]

}

const initialState: HandBookState = {
    loading: false,
    types: [],
    regions: [],
    countries: []
};


interface HandBookPayload {
    types: IAirportType[],
    regions: IAirportRegion[],
    countries: IAirportCountry[],
}

export const handBookSlice = createSlice({
    name: 'handBook',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },

        fetchSuccess(state, action: PayloadAction<HandBookPayload>) {
            state.loading = false;
            state.types = action.payload.types;
            state.regions = action.payload.regions;
            state.countries = action.payload.countries;
        }
    }
});

export default handBookSlice.reducer

