import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5924c5a818654da59d917914036afafc'
    }
})

