import axios from 'axios'

const CLIENT_URL="http://localhost:8093/client"

class ClientService{

    getClientListByCustodianId(custodian){
        return axios.get(CLIENT_URL+"/custodian/"+custodian);
    }
    
    getClientById(client){
        return axios.get(CLIENT_URL+"/"+client);
    }

    getAmountByCustodian(){
        return axios.get(CLIENT_URL+"/custodian/");
    }

    getAllClients(){
        return axios.get(CLIENT_URL);
    }

}
export default new ClientService();