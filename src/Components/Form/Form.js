import {react , useState} from 'react';
import './Form.css';
const Form = ({data , getAns}) =>
{   
    const [index, setIndex] = useState(0);
    const [value , setValue]  = useState({});
    const [iclass , seticlass] = useState(null);

    function setFormVal(key , val)
    {
        setValue({...value , [key]:val});
    }

    

    
    return (
        <div className='form-page'>
        <div className='form'>
            <h5 className='que'>{`${data[index]["id"]} ) `}{data[index]["que"]}</h5>
            <div className='d-flex justify-content-between ans-container'>
                <button className={`ans-btn ${iclass == 1 ?  'active' : ''}`} onClick={()=>(seticlass(1) ,setFormVal(data[index]["id"] , data[index]['1']))}>{data[index]['1']}</button>
                <button className={`ans-btn ${iclass == 2 ? 'active' : ''}`} onClick={()=>(seticlass(2) ,setFormVal(data[index]["id"] , data[index]['2']))}>{data[index]['2']}</button>
                <button className={`ans-btn ${iclass == 3 ? 'active' : ''}`} onClick={()=>(seticlass(3) ,setFormVal(data[index]["id"] , data[index]['3']))}>{data[index]['3']}</button>
                <button className={`ans-btn ${iclass == 4 ? 'active' : ''}`} onClick={()=>(seticlass(4) ,setFormVal(data[index]["id"] , data[index]['4']))}>{data[index]['4']}</button>
            </div>

        </div>
        <div className='d-flex justify-content-center container-btn'>
        { index === 4  ? 
        <button className='btn-quiz' onClick={()=>{getAns(value)}}>Submit</button> :
        <button className='btn-quiz' onClick={()=>(seticlass(null) ,setIndex(index+1))}>Next</button>}
        </div>
    </div>);
}

export default Form;