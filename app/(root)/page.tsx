import BookList from "@/components/BookList";
import BookOverView from "@/components/BookOverView";
import { sampleBooks } from "@/constants";

const Home = () => {
	return <>

	<BookOverView sampleBooks={sampleBooks}/>
	<BookList booktitle="Popular Books" />
		
		
	</>
}

export default Home;