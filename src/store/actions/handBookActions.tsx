import {$url} from '../../axios/index';
import {AppDispatch} from "../index";
import {IAirportCountry, IAirportRegion, IAirportType} from "../../models/models";
import {handBookSlice} from "../slices/handBookSlice";


export const fetchHandBooks = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(handBookSlice.actions.fetching());
            const response =  await Promise.all([
                $url.get<IAirportType[]>('handbooks/airport-types'),
                $url.get<IAirportRegion[]>('handbooks/regions'),
                $url.get<IAirportCountry[]>('handbooks/countries'),

            ]);
            dispatch(handBookSlice.actions.fetchSuccess({
                types: response[0].data,
                regions: response[1].data,
                countries: response[2].data,
            }))
        } catch (e) {
        }
    };
};