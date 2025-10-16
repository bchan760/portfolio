// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const response = await fetch("http://localhost:5000/api/contact", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(formData),
//   //   });

//   //   const data = await response.json();
//   //   alert(data.message || "Message sent!");
//   // };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label for="exampleFormControlInput1">Name</label>
//       </div>
//       <div class="form-group">
//         <label for="exampleFormControlSelect1">Email</label>
//       </div>
//       <div class="form-group">
//         <label for="exampleFormControlSelect2">Message</label>
//       </div>
//       {/* <div class="form-group">
//       </div> */}
//     </form>
//   );
// };

// export default Contact;
