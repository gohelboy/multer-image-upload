import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const test = process.env.IMAGE_URI;
  console.log(test);
  const [file, setFile] = useState("");
  const [user, setUser] = useState();

  const getAllImages = async () => {
    const res = await axios.get("http://localhost:5000/user/getimages");
    setUser(res.data);
    console.log(res);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file) 
    let formdata = new FormData();
    formdata.append("image", file, file.name);
    await axios.post("http://localhost:5000/user/upload", formdata);
    getAllImages();
  };

  return (
    <div align="center">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
          gap: "20px",
          margin: "50px",
          padding: "50px",
          backgroundColor: "rgba(255, 255, 122)",
          borderRadius: "18px",
        }}
      >
        <input
          type="file"
          name="image"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input type="submit" />
      </form>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user?.map((item) => {
          return (
            <div key={item._id}>
              <img
                src={"http://localhost:5000/public/uploads/" + item.image_path}
                alt={item.image_path}
                width="200px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
