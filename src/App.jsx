import React from "react";
import Book from "./Components/Book";


function App() {
 
  const books = [
    {
      judul:"king of scars",
      genre:"fantasy",
      harga:"Rp. 125.000,00",
      deskripsi: "king of scars yang mengisahkan sebuah kerajaan",
      gambar:"https://i0.wp.com/portalkota.id/wp-content/uploads/2021/10/9786024815974_King_of_Scars.jpg?fit=700%2C489&ssl=1"

    },
    {
      judul:"jurnal risa",
      genre:"/horror",
      harga:"Rp. 80.000,00",
      deskripsi:"jurnal risa yang mengisahkan kisah mistis dan horor",
      gambar:"https://www.belbuk.com/images/products/buku/novel--sastra/misteri--thriller/Jurnal-Risa-Teror-Liburan-Sekolah-5e3a692d68b4fl.jpg"
    },
    {
      judul:"the good son",
      genre:"thriller",
      harga:"Rp. 150.000,00",
      deskripsi:"the good son yang menginspirasi bagi kaum remaja yang sedang melewati masa lajangnya",
      gambar:"https://cdn.gramedia.com/uploads/items/9786020622569_Anak-Teladan-The-Good-Son.jpg"
    }
  ]
  return (
    <div>
      {
        books.map((value,index)=>{
          return <Book key={index} gambar={value.gambar} judul={value.judul} deskripsi={value.deskripsi}/>
        })
      }
    </div>
  )
}

export default App;
