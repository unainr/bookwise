export const sampleBooks = {
	id: "1",
	title: "Origin",
	author: "Dan Brown",
	genra: "Thriller / Suspense",
	rating: 4.6,
	totalCopies: 100,
	availableCopies: 42,
	description:
		"Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons. ",
        coverColor: "#012B48",
        coverUrl: "/images/image.png",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
	summary:
		"Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons. ",
};


export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/addbooks",
    text: "Add Books",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];