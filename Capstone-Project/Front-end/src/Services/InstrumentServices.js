import axios from 'axios'

const CLIENT_URL="http://localhost:8093/instrument"

class InstrumentServices{

    getAllInstruments(){
        return axios.get(CLIENT_URL);
    }
    getInstrumentsById(instrument){
        return axios.get(CLIENT_URL+"/"+instrument);
    }

}
export default new InstrumentServices();