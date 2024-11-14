const Books = require("../models/Books");

const getAllBook = async (req, res) => {
  try {
    const book = await Books.find({});
    res.json({
      books: book
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books", error });
  }
};

const getPaginatedItem = async(req, res)=>{
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page-1) * limit;
  const totalDocuments = await Books.countDocuments();
  const books = await Books.find().skip(startIndex).limit(limit);
  res.json({
    totalDocuments,
    currentPage: page,
    totalPages: Math.ceil(totalDocuments / limit),
    pageSize: limit,
    books
  })
}

const searchBook = async (req, res)=>{
  try{
    const searchText = req.query.q || '';
    const searchQuery = {};
    if(searchText){
      searchQuery.$text = {$search : searchText}
    }
    const books = await Books.find(searchQuery);
    res.json({
      totalResult: books.length,
      books
    })
  }catch(error){
    res.status(500).json({ message: 'Error retrieving books', error });
  }
  
}

const filterBooks = async (req, res) => {
  try {
    const { title, author, year, publisher } = req.query;
    const filterQuery = {};
    if (title) {
      filterQuery.book_title = { $regex: title, $options: 'i' };
    }
    if (author) {
      filterQuery.book_author = { $regex: author, $options: 'i' }; 
    }
    if (year) {
      filterQuery.year_of_publication = parseInt(year); 
    }
    if (publisher) {
      filterQuery.publisher = { $regex: publisher, $options: 'i' };
    }
    const books = await Books.find(filterQuery);
    res.json({
      totalResults: books.length,
      books,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error filtering books', error });
  }
};

module.exports = {
  getAllBook,
  getPaginatedItem,
  searchBook,
  filterBooks
};
