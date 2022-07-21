import axios from 'axios';

const url = `http://185.241.68.214:8888/api/`;

const $url = axios.create({
    baseURL: url
});

export {
   $url
}