import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BooksList = () =>{

const API_url = "https://6741ec5be4647499008f405b.mockapi.io/api/Products";
const[books,setBooks]=useState([]);
const[loading,setLoading]= useState(false);
const[reload,setReload] = useState(0);
const[id,setId] = useState(null);

const[alert,setAlert]=useState(false);





const getBooks = async () => {
    setLoading(true);
    try {
        const response = await axios.get(API_url);
        setLoading(false);
        setBooks(response.data);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

const removeProduct = async () =>{
    setLoading(true);
    const res = await axios.delete(`${API_url}/${id}`)
    if (res.status === 200) {
        setLoading(false);
        setAlert(false)
        setReload(reload + 1)
    }
}


const handleAlertBox = (id) => {
    setAlert(true)
    setId(id)
}


useEffect(()=>{
    getBooks();
},[reload])



    return(
        <>
{loading ? (
    <>
    <div class="loader"></div>
    </>
    ) : (
    <>
    <table className="book_list">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Auther</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                books && books.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item?.id}</td>
                            <td>{item?.product_name}</td>
                            <td>{item?.product_description}</td>
                            <td>{item?.product_price}</td>
                            <td>
                                <Link className="action_btn" to={`/create-book/${item.id}`}>Edit</Link>
                                <button className="action_btn" onClick={()=>handleAlertBox(item?.id)}>Del</button>
                            </td>
                         </tr>
                    )
                })
            }
            </tbody>
    </table>

    {
        alert && (
            <>  
            <div className="alert_box" >
                <h2>Do you want to remove</h2>
                <button onClick={()=>removeProduct()} >Yes</button>
                <button onClick={()=>setAlert(false)} >No</button>
            </div>
            </>
        ) 
    }
    </>
) }

        </>
    );

}

