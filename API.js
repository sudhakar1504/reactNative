const appsetting ={
    FETCHCATEGORYDATA: async () => {
      const results = `https://www.themealdb.com/api/json/v1/1/categories.php`;
      return await (await fetch(results)).json();
    },
    FETCHSPECIFIC: async (id) => {
      const results = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
      return await (await fetch(results)).json();
    }
}
export default appsetting;