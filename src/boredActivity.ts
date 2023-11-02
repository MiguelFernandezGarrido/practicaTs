import axios from 'axios';
import { Activity } from './activity';


export async function getBoredActivity() {
    let valuePrice: HTMLSelectElement = document.getElementById('price') as HTMLSelectElement;
    let minPrice: number;
    let maxPrice: number;
    let participants: number = parseFloat((document.getElementById('participants') as HTMLInputElement).value) || Math.floor(Math.random() * 10) + 1;

    switch (valuePrice?.value) {
        case '1':
            minPrice = 0;
            maxPrice = 0.33;
            break;
        case '2':
            minPrice = 0.34;
            maxPrice = 0.66;
            break;
        case '3':
            minPrice = 0.67;
            maxPrice = 1;
            break;
        default:
            minPrice = 0;
            maxPrice = 1;
    }
    // console.log(data.activity);
    const url = `https://www.boredapi.com/api/activity?minprice=${minPrice}&maxprice=${maxPrice}&participants=${participants}`;
    const response = await axios.get(url);
    const data: Activity = response.data;
    return data;
}