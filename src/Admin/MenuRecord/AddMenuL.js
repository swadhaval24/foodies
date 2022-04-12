import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../../Constants/Url'
import { useEffect } from 'react'
import * as notification from "../../Constants/notification"

const AddMenu = () => {
  const [imageName, setImageName] = useState(undefined)
  const [menuName, setMenuName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [menutypeId,setMenuTypeId]= useState('0')

  const [data,setData]=useState({})
  const navigate = useNavigate();

  const onFileSelect = (event) => {
    setImageName(event.target.files[0])
  }


  useEffect(()=>{
    // const menuTypeId = sessionStorage.getItem("menuTypeId");
      
      
  },[data])
  

          const addMenu = () => {
            console.log(menutypeId);
            if (menuName.length === 0) {
              notification.info('select menu name')
            } else if (price.length === 0) {
              notification.info('select price')
            } else if (!imageName) {
              notification.info('select Image')
            } else if(description.length===0) {
              notification.info('Enter description ')
            }else{
              
              const data = new FormData()
        
              data.append('menuName', menuName)
              data.append('price', price)
              data.append('imageName', imageName)
              data.append('description', description)
        
              axios.post(url + `/menu/add/${menutypeId}`, data).then((response) => {
                
                const result = response.data
                if (result.status === 'success') {
                  notification.success('successfully added an menu')
        
                 
                 navigate('/MenuList')
                } else {
                  // alert('error while adding menu')
                  notification.success('successfully added an menu')
                }
              })
          
             
             
            }
          }

  

  return (
    <div class="col-md-5 mx-auto py-3 text-info">
      <h2 className="page-title"><b>Add Menu</b></h2>

      

      <div className="mb-3">
        
        <input
          onChange={(e) => {
            setMenuName(e.target.value)
          }}
          type="text"
          placeholder="Enter the menu name"
          className="form-control"
        />
        <label htmlFor=""><b>Menu Name</b></label>
      </div>
      <div className="mb-3">
        
        <input
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          type="text"
          placeholder="Enter the price"
          className="form-control"
        />
         <label htmlFor=""><b>Price</b></label>
      </div>

      <div className="mb-3">
       
        <input
          accept="image/*"
          onChange={onFileSelect}
          type="file"
          className="form-control"
        />
         <label htmlFor=""><b>Image</b></label>
      </div>
      <div class="form-group">
  <label for="demo_overview"></label>
    <select  class="form-control" data-role="select-dropdown"
    onChange={(e) => {
      setMenuTypeId(e.target.value)
     }}
    >
                        <option value = "">Select MenuType </option> 
                        <option value = "1">Nonveg</option>  
                        <option value = "2">Veg</option>  
                        <option value = "3">Chinees </option>
                        <option value = "4">SouthIndian</option>
                        <option value = "5">Sweets</option>  
                    
                        <option value = "6">Thali</option>  
                        <option value = "7">Rice</option>   
                        <option value = "8">Roti</option>  
                        
                        </select>
                        <label htmlFor=""><b>Menu Type</b></label>
                     </div>



      {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> */}

      {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button onClick={()=>{setMenuTypeId('1')} }  class="dropdown-item" type="button">Veg</button>
    <button onClick={()=>{setMenuTypeId('2')} }  class="dropdown-item" type="button">Nonveg</button>
    <button onClick={()=>{setMenuTypeId('3')} }  class="dropdown-item" type="button">Southindian</button>
  </div>
   </div> */}
      
     {/* <label className="btn btn-info"> MenuTypes  </label>  
                    <select name="menuTypeId"
                     onChange={(e) => {
                      setMenuTypeId(e.target.value)
                     }}
                    >  
                        <option value = "1">Veg </option>  
                        <option value = "2">Nonveg</option>  
                        <option value = "3">Chiiness</option>  
                        <option value = "4">Southindian </option>  
                    </select>  
                     */}
      
        {/* <div clas sName="mb-3">
        <label htmlFor="">MenuTypeID</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div> */}
     
      <div className="mb-3">
      
        <input
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          type="text"
          placeholder="Enter the description"
          className="form-control"
        />
        <label htmlFor=""><b>Description</b></label>
      </div>
      <div className="mb-3">
        <button onClick={addMenu} className="btn btn-success me-3">
          Add
        </button>

        <Link to="/menuList">
          <a className="btn btn-warning">Back</a>
        </Link>
      </div>
    </div>
  )
}

export default AddMenu
