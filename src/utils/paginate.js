const paginate = (cocktails) => {
    const itemPerPage = 6;
    const pages = Math.ceil(cocktails.length/itemPerPage)
    const newCocktails = Array.from({length:pages},(_,index) => {
        const start = index * itemPerPage;
        return cocktails.slice(start, start + itemPerPage);
    });
    
    return newCocktails;
}

export default paginate;