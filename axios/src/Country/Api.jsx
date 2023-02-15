
import axios from "axios";
 let getData = ({page=1 , limit=5, sort,order}) => {
    return axios.get(`http://localhost:3000/cities`, {
      params: {
        _page: page,
        _limit: limit,
        _sort:sort,
        _order:order
      },
    });
  };
  export default getData;

  export let addCountry=(form)=>{
    return axios({
      method:'post',
      url:'http://localhost:3000/cities',
      data:form
    })
  }

  export let deletedData=(id)=>{
    return axios({
        method:"delete",
        url:`http://localhost:3000/cities/${id}`
    })
    
  }