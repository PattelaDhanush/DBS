import axios from 'axios'

const Buyer_seller_URL="http://localhost:8093/api/v1/buyer_seller"

class Buyer_sellerService{

    createOrder(buyer){
        return axios.post(Buyer_seller_URL,buyer);
    }
}
export default new Buyer_sellerService();