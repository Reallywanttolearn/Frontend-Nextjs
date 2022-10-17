import React, { useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Pria");
  const router = useRouter();
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
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
        <form className="mt-20 text-white text-xl" onSubmit={saveUser}>
          <div className="">
            <label className="">Name</label>
            <div className="text-gray-700">
              <input
                type="text"
                className=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="">
            <label className="">Email</label>
            <div className="text-gray-700">
              <input
                type="text"
                className=""
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
              <button type="submit" className="bg-sky-500 px-5 py-2 mt-2 rounded-md">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddUser;