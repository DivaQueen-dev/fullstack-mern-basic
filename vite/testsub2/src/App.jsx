import { useState  } from "react"

const Form=()=>{
    const [formData,setformData]= useState({
        first_name:"",
        last_name:""
    })
    const handleChange=(event)=>{
      const {name,value}=event.target;
      setformData(prevData=> ({
        ...prevData,
        [name]:value
       
      }))}

       const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)

       }
       console.log(formData)
    

return(
    <>
    <div className="container">
        <h1> {formData.first_name} &nbsp;&nbsp;{formData.last_name}</h1>
        <form onSubmit={handleSubmit} >
            <label >First Name:</label>
            <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} /><br />
            <label >Last Name:</label>
            <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} /><br />
            <label >Gender</label> <br />
            <input type="radio" name="gender" value='Male'onChange={handleChange} />&nbsp;Male  &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" value='Female'onChange={handleChange} />&nbsp;Female  <br /><br />
            <select name="cources" onChange={handleChange}
>
                <option value="HTML" name="cources" >HTML </option><br />
                <option value="CSS" name="cources" >CSS </option><br />
                <option value="JS"  name="cources">JS </option><br />
                <option value="REACT"name="cources" >REACT </option><br />
            </select><br /><br />

            <button type="submit" >Submit</button>
        </form>
    </div>
    </>
)
}
export default Form