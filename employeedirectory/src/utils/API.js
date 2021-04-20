import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=gender,name,email,picture";

const exportedObject = {
    search: function() {
        return axios.get(BASEURL);
    }
};

export default exportedObject;