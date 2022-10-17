import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Pria");

  const router = useRouter(); // tampung function useRouter()

  const query = router.query //tampung function untuk membaca query string

  const id = query.user // query.[namafile] untuk mengambil query string dan di tampung di variable id

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

    useEffect(() => {
    getUserById();
  }, []);
 
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="bg-gray-500 h-[100vh] flex justify-center">
      <div className="bg-slate-700 h-[50vh] w-[50vh] flex justify-center mt-10 rounded-xl">
        <form onSubmit={updateUser} className="mt-20 text-white text-xl">
          <div className="">
            <label className="">Name</label>
            <div className="">
              <input
                type="text"
                className="text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="">
            <label className="">Email</label>
            <div className="">
              <input
                type="text"
                className="text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="">
            <label className="">Gender</label>
            <div className="">
              <div className="text-gray-700">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Pria">Pria</option>
                  <option value="Wanita">Wanita</option>
                </select>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <button type="submit" className="bg-sky-500 px-5 py-2 mt-2 rounded-md ">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditUser;