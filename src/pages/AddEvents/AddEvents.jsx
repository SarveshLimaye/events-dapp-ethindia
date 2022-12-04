import { React, useState, useRef } from "react";
import "./AddEvents.css";
import { saveItem } from "../../utils/firebase-functions";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../utils/firebase-config";
const AddEvents = () => {
  const inputRef = useRef(null);
  let data = {};
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [trxhash, setTrxhash] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error uploading image");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          console.log("File available at", downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };
  const onSubmit = async () => {
    const form = new FormData();
    form.append("file", inputRef.current.files[0]);

    const options = {
      method: "POST",
      body: form,
      headers: {
        Authorization: "c542845d-02ad-478d-8609-c8179f0e0d9c",
      },
    };

    await fetch(
      "https://api.nftport.xyz/v0/mints/easy/files?" +
        new URLSearchParams({
          chain: "goerli",
          name: title,
          description: description,
          mint_to_address: address,
        }),
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let tempObj = { ...response, imageURL: imageAsset };
        saveItem(tempObj);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="upload-form">
      <label name="acc_add" className="acc_add">
        Account Address
      </label>
      <input
        name="acc_add"
        className="acc_add"
        onChange={(e) => setAddress(e.target.value)}
      />
      <label name="title" className="title">
        Title
      </label>
      <input
        name="title"
        className="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label name="desc" className="desc">
        Description
      </label>
      <input
        name="desc"
        className="desc"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label name="file" className="File">
        Upload a File
      </label>
      <input
        type="file"
        className="upload"
        ref={inputRef}
        onChange={uploadImage}
        name="uploadImage"
        accept="image/*"
      />
      <button type="button" className="submit" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default AddEvents;
