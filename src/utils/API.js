import axios from 'axios'
const URL = 'https://randomuser.me/api/?results=50&inc=name,email,registered,phone,picture,dob';

export default {
    search: function() {
        return axios.get(URL);
    }
}
