// import { useState } from "react";
// import { upload } from "../../services/bookService";
// import { toast } from "react-toastify";
// const UploadFile = (props) => {
//   const [file, setFile] = useState({});
//   const [img, setImg] = useState();
//   const [name, setName] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     let formData = new FormData();
//     formData.append("image", file);
//     formData.append("name", name);
//     let response = await upload(formData);
//     if (response && response.EC === 0) {
//       toast.success(response.EM);
//     } else {
//       toast.error(response.EM);
//     }
//     setImg(URL.createObjectURL(file));
//   };

//   return (
//     <>
//       <form>
//         <img src={img} />
//         <input
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         />
//         <input
//           type="file"
//           onChange={(event) => {
//             setFile(event.target.files[0]);
//           }}
//         />
//         <button
//           onClick={(event) => {
//             handleSubmit(event);
//           }}>
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default UploadFile;
