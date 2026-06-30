import axios from "axios";

const base_url = "http:localhost:3000";

//Upload
export const uploadImage = async (file: File,folder: string = "")=>{

    const form = new FormData();
    form.append("file",file);
    form.append("folder",folder);

    const res = await axios.post(`${base_url}/api/upload`,form,{headers: {"Content-Type": "multipart/form-data"}});

    return res.data;

}

//Delete
export const deleteImage = async (folder: string,id: string)=>{
    const res = await axios.delete(`${base_url}/api/delete/${folder}/${id}`);

    return res.data;
}