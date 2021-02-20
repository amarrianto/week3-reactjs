import axios from 'axios';
import apiURL from '../../config/config-url'

const listCategory = async()=>{
    try {
        let response = await axios.get(`${apiURL}/api/category`)
        return await response.data
    } catch (error) {   
        return await error.message
    }
}
//2.createRegion, gunakan variable data untuk di send ke backend
// di backend, jangan lupa pake req.body.data, agar bisa di extract ke tiap attribute
const createCategory = async (category) => {
    try {
        let response = await axios.post(`${apiURL}/api/category/`,{
          data : category
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const deleteCategory = async (id) => {
    try {
        let response = await axios.delete(`${apiURL}/api/category/${id}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const updateCategory = async (category) => {
    try {
        let response = await axios.put(`${apiURL}/api/category/${category.cate_id}`,{
          data : category
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };

export {listCategory, createCategory, deleteCategory, updateCategory}