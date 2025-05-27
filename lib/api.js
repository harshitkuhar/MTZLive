import http from "./config";

const Api = {
    getApi: async (url) => {
        let res = await http.get(url);
        return res.data;
    }
}

export default Api;