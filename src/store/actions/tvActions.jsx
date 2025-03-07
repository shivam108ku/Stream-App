export { removetv } from '../reducers/tvSlice';  // Fixed import path
import instance from '../../utils/axios';
import {  removetv, loadmovie } from '../reducers/tvSlice';  // Corrected import

export const asyncloadtv = (id) => async (dispatch, getState) => {  // Renamed function
    try {
        const detail = await instance.get(`/tv/${id}`);
        const externalid = await instance.get(`/tv/${id}/external_ids`);
        const recommendations = await instance.get(`/tv/${id}/recommendations`);
        const similar = await instance.get(`/tv/${id}/similar`);
        const videos = await instance.get(`/tv/${id}/videos`);
        const watchprovider = await instance.get(`/tv/${id}/watch/providers`);

        let theultimatedata = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.filter(m => m.type === "Trailer"),
            watchprovider: watchprovider.data.results?.IN,
        };

        dispatch( loadmovie(theultimatedata));  // Fixed function call

    } catch (error) {
        console.error("Error fetching TV data:", error);
    }
};
