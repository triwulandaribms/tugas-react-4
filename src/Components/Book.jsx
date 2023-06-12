import React from "react";
import { useState } from "react";


function Book(props) {
 
    const [suka,setSuka] = useState(true);
    const [showMore,setShowMore] = useState(false)

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    function handleLikeClick(){
        setSuka(!suka)
    }

    return (
        <div style={{
            padding:"10px",
            display:"inline-flex",
            flexWrap: "wrap",
            marginLeft:150
        }}>
             <div style={{
                height: "50%",
                width: "100px",
                backgroundColor: "#008080",
                color: "white",
                borderRadius: "15px",
                padding: "50px",
            
            }}>
                <p>{props.judul}</p>
                <img src={props.gambar} alt="gambar" style={{
                width:"110%", 
                height:"150px",
            }}/>
            {showMore && <p>Buku ini sebuah novel {props.deskripsi}.</p>}
            <button onClick={handleMoreClick} >
                {showMore} selengkapnya
            </button>
            <div style ={{display:"flex"}}>
                <button onClick={handleLikeClick} style={{
                    backgroundColor: suka ? "#3CB371" : "#CD5C5C",
                    marginTop:"10px",
                    marginLeft:"20px"
                }}>
                     {suka ? "suka" : "batal suka"}
                </button>

            </div>
            </div>
        </div>
    )
}
   export default Book;

