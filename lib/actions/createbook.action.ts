"use server"

import prisma from "../prisma"

interface CreateBook {
    title: string
    author: string
    genra: string
    totalbooks: number
    bookimage: string
    bookcolor: string
    booksummary: string
}

export const createBook = async (params: CreateBook) => {
    try {
      const {
        title,
        author,
        genra,
        totalbooks,
        bookimage,
        bookcolor,
        booksummary,
      } = params;

    if(!title || !author || !genra || !totalbooks || !bookimage || !bookcolor || !booksummary) {
        return {success:false ,error:"All fields are required"}
    }

    const book = await prisma.addBook.create({
        data: {
            title,
           author,
            genra,
            totalBooks:totalbooks,
            bookImage:bookimage,
            bookColor:bookcolor,
            bookSummary:booksummary
        }
    })

    return {success:true ,book }
    } catch (error:any) {
        console.log(error)
        return {success:false ,error:error.message}
        
    }
}


export const getAllBooks = async () => {
    try {
      const books = await prisma.addBook.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });
  
      return { success: true, books };
    } catch (error: any) {
      console.log("Error fetching books:", error);
      return { success: false, error: error.message };
    }
  };

export const getBookById = async (id: number) => {
    try {
      const book = await prisma.addBook.findUnique({
        where: {
          id: id
        }
      });

      return { success: true, book };
    } catch (error: any) {
      console.log("Error fetching book by ID:", error);
      return { success: false, error: error.message };
    }
  };


//  export const deleteBook = async (id: number) => {
//     try {
//       const book = await prisma.addBook.delete({
//         where: {
//           id: id
//         }
//       });

//       return { success: true, book };
//     } catch (error: any) {
//       console.log("Error deleting book:", error);
//       return { success: false, error: error.message };
//     }
//   };