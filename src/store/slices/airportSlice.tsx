import {IAirport, IFilter} from "../../models/models"
import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";

interface AirportState {
    loading: boolean
    error: string
    count: number
    airports: IAirport[]
    airportsContainer: IAirport[]
}

const initialState: AirportState = {
    loading: false,
    error: '',
    count: 0,
    airports: [],
    airportsContainer: []

};

interface AirportPayload {
    airports: IAirport[],
    count: number
}

export const airportSlice = createSlice({
    name: 'airport',
    initialState,
    reducers: {
        fetching(state, action: PayloadAction) {
            state.loading = true
        },

        fetchSuccess(state, action: PayloadAction<AirportPayload>) {
            state.loading = false;
            state.airports = action.payload.airports;
            state.airportsContainer = action.payload.airports;
            state.count = action.payload.count;
            state.error = ''

        },

        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message
        },

        filter(state, action: PayloadAction<IFilter>) {
            state.airports = state.airportsContainer
                .filter(a => a.type.includes(action.payload.type))
                .filter(a => a.region.includes(action.payload.region))
                .filter(a => a.country.includes(action.payload.country))

        }
    }
});

export default airportSlice.reducer

