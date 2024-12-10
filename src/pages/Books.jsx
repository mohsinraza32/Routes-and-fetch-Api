import { Link } from "react-router-dom";
import { BooksList } from "./Books/booksList";

export const Books = () =>{
    return(
        <>
        <div className="book_wraper">
        <div className="add_books">
            <Link to={"/create-book"}>Add Product</Link>
        </div>
            <BooksList/>
        </div>
        </>
    );

}

