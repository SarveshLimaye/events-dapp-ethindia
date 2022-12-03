import {React,useState,useRef} from 'react'
import './AddEvents.css'
const AddEvents = () => {
  const inputRef = useRef(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address,setAddress] = useState('');
  const [trxhash, setTrxhash] = useState('');
  const [tokenId,setTokenId] = useState('');
  const onSubmit = async () => {
    const form = new FormData();
    form.append("file", inputRef.current.files[0]);
    
    const options = {
      method: 'POST',
      body: form,
      headers: {
        Authorization: 'c542845d-02ad-478d-8609-c8179f0e0d9c'
      },
      
      }
    
   
    await fetch('https://api.nftport.xyz/v0/mints/easy/files?' + new URLSearchParams({
      chain: 'goerli',
      name: title,
      description: description,
      mint_to_address: address,
    }), options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch(err => console.error(err));
  }

  return (
    <form className="upload-form">
    <label name="acc_add" className="acc_add" >Account Address</label>
    <input name="acc_add" className="acc_add" onChange={(e) => setAddress(e.target.value) } />
    <label name="title" className="title">Title</label>
    <input name="title" className="title" onChange={(e) => setTitle(e.target.value) }/>
    <label name="desc"className="desc">Description</label>
    <input name="desc"className="desc"  onChange={(e) => setDescription(e.target.value) }/>
    <label name="file" className="File">Upload a File</label>
    <input type="file" name="file" className="upload"  ref={inputRef}/>
    <button type="button" className="submit" onClick={onSubmit}>Submit</button>
  </form>
  )
}

export default AddEvents