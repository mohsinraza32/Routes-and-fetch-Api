import axios from "axios";
import { useState ,useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom";

export const CreateBook = () =>{

const params = useParams();



const[loading,setLoading]= useState(false);

const navigate = useNavigate();

const[formData,setFormData] = useState({
    product_name:"",
    product_description:"",
    product_price:null
});
console.log(formData,"formData");


const handleInputChange =  (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
        ...formData,
        [name]:value
    })    
}
const API_url = "https://6741ec5be4647499008f405b.mockapi.io/api/Products";

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
        if (params.id) {
            const response  = await axios.put(`${API_url}/${params.id}`,formData);
            console.log(response,"response");
            
            const {status} = response;
            
            if (status === 200) {
                setLoading(false);
                navigate('/books')
            }
        }else{
            const response  = await axios.post(API_url,formData);
            const {status} = response;
            if (status === 201) {
                setLoading(false);
                navigate('/books')
            }
        }

        
        
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
    
}



useEffect(()=>{
    const getFomData = async () => {
        
        try {
            const res = await axios.get(`${API_url}/${params.id}`);
            console.log(res,"res");
            const { product_description, product_name, product_price} = res.data;

            setFormData({
                product_name:product_name ?? "",
                product_description:product_description ?? "",
                product_price:product_price ?? null
            })
            
        } catch (error) {
            console.error(error);
        }
    }
    
    getFomData();
},[params.id])


    return(
        <>

            <div className="boom_form_wraper">
            <h2>Create Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className="col">
                        <label>Book Name</label>
                        <input value={formData?.product_name} onChange={handleInputChange} type="text" name="product_name" />
                    </div>
                    <div className="col">
                        <label>Author</label>
                        <input value={formData.product_description} onChange={handleInputChange}  type="text" name="product_description" />
                    </div>
                    <div className="col">
                        <label>product_price</label>
                        <input value={formData.product_price} onChange={handleInputChange}  type="text" name="product_price" />
                    </div>
                    <div className="col">
                        <input className="submit_btn" disabled={loading ? 'disabled' : ""} type="submit" value={loading ? "Submiting..." : "Submit"}/>
                    </div>
                </form>
            </div>
        </>
    )
}