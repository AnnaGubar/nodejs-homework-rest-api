const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { id: owner } = req.user;

  // фильтр по параметру запроса ?favorite=true  
  const { favorite } = req.query;
  if (favorite) {
    const result = await Contact.find({ owner }, "-createdAt -updatedAt");
    const resultFavorite = [...result].filter((item) => item.favorite);

    res.status(200).json(resultFavorite);
  }

  // пагинация по параметру запроса ?page=3&limit=2
  const {page = 1, limit = 2} = req.query;
  if(page && limit){
    const skip = (page - 1) * limit;
    const result = await Contact.find({owner}, "-createdAt -updatedAt", {skip, limit: Number(limit)}).populate("owner", "email");
  
    res.status(200).json(result);
  }
};

module.exports = getAll;
