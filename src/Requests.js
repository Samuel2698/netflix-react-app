const key = '8b2a9208559aad7b404062f7dd99a05d'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=fr&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=fr&page=1`,
    requestRecommendations: `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}&language=fr&page=1`
  };

  export default requests