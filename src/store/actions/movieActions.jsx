export { removemovie } from '../reducers/movieSlice';
import instance from '../../utils/axios';
import { loadmovie } from '../reducers/movieSlice'; 

export const asyncloadmovie = (id) => async (dispatch, getState) => {
    try {
        const detail = await instance.get(`/movie/${id}`);
        const externalid = await instance.get(`/movie/${id}/external_ids`);
        const recommendations = await instance.get(`/movie/${id}/recommendations`);
        const similar = await instance.get(`/movie/${id}/similar`);
         
        const videos = await instance.get(`/movie/${id}/videos`);
        const watchprovider = await instance.get(`/movie/${id}/watch/providers`);

        let theultimatedata = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.filter(m => m.type === "Trailer"),
            watchprovider: watchprovider.data.results?.IN,
        };

        dispatch(loadmovie(theultimatedata));

    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
};
