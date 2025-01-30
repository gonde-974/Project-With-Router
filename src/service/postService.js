import axios from "axios"

class PostServise {
    static getSingleProduct = ()=> axios.get ('https://dummyjson.com/products/7')
    
    
}

export default PostServise;