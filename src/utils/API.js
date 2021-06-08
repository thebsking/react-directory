import axios from 'axios'
const URL = 'https://randomuser.me/api/?results=15&nat=us&inc=name,email,registered,phone,picture,dob';

export default {
    search: function() {
        return axios.get(URL);
    }
}
