// import React, { useState } from 'react';

// const RequestForm = () => {
//   const [subject, setSubject] = useState('');
//   const [severity, setSeverity] = useState('');
//   const [topic, setTopic] = useState('');
//   const [request, setRequest] = useState('');
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({ subject, severity, topic, request, file });
//   };

//   return (
//     <div className="request-form bg-white text-black p-6 rounded-lg shadow-lg w-1/2 mx-auto">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="subject" className="block text-gray-700">Subject</label>
//           <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-2 border rounded">
//             <option value="">Select Subject</option>
//             <option value="generalEnquiry">General Enquiry</option>
//             <option value="technicalIssue">Technical Issue</option>
//             <option value="billing">Billing</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="severity" className="block text-gray-700">Severity</label>
//           <select id="severity" value={severity} onChange={(e) => setSeverity(e.target.value)} className="w-full p-2 border rounded">
//             <option value="">Select Severity</option>
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="topic" className="block text-gray-700">Topic</label>
//           <input type="text" id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full p-2 border rounded" placeholder="Provide a topic..." />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="request" className="block text-gray-700">Request</label>
//           <textarea id="request" value={request} onChange={(e) => setRequest(e.target.value)} className="w-full p-2 border rounded" placeholder="Describe your request..." rows={4}></textarea>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="file" className="block text-gray-700">Attach File (Optional)</label>
//           <input type="file" id="file" onChange={handleFileChange} className="w-full p-2 border rounded" />
//         </div>

//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Post</button>
//       </form>
//     </div>
//   );
// };

// export default RequestForm;


import React, { useEffect, useState } from 'react';

const RequestForm = () => {
  const [user, setUser] = useState('');
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('new');
  const [file, setFile] = useState(null);

  useEffect(()=>{
    fetchUser();
  },[])

  const fetchUser = (()=>{
    const user = (JSON.parse(localStorage.getItem("user"))); // Replace with the actual user ID
    setUser(user);
  })

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ user, product, description, status, file });
  };

  return (
    <div className="request-form bg-white text-black p-6 rounded-lg shadow-lg w-1/2 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="product" className="block text-gray-700">Product</label>
          <select id="product" value={product} onChange={(e) => setProduct(e.target.value)} className="w-full p-2 border rounded">
            <option value="">Select Product</option>
            <option value="Intermediate English">Intermediate English</option>
            <option value="Advanced English">Advanced English</option>
            <option value="Business English">Business English</option>
            <option value="English">English</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" placeholder="Describe your issue..." rows={4}></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700">Attach File (Optional)</label>
          <input type="file" id="file" onChange={handleFileChange} className="w-full p-2 border rounded" />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Post</button>
      </form>
    </div>
  );
};

export default RequestForm;
