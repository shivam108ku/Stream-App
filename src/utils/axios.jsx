import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ZmMGVmMmJlZWRiM2VlYmM1NzI2OTI5Yjk4YzkyYiIsIm5iZiI6MTc0MDg5ODM5NS4zMzEsInN1YiI6IjY3YzQwMDViOGJkN2VjYjEyYjRiMDgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wdTY_-L5iDv_C6g1dydJv1OG_uX3szZHsvU-34-sH0',

      },
});

export default instance;