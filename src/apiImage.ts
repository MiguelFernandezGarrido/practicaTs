import axios from "axios";

export async function getImage(type : string) {
    const url = `https://api.pexels.com/v1/search?`;
    const query = `query=${type}&page=3&per_page=10`;
    const apiKey = "S0WthxOtwr6yze4QNnphhAn2TASLnJrMRASAQTCsJ0grHVfIcdYKLGvf";
    const header = {
        headers: {
            Authorization: apiKey
        }
    }
    const response = await axios.get(url + query, header);
    const data = response.data;
    return data;
}