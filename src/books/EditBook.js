import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik} from 'formik';
function EditBook(){
  let navigate = useNavigate();
  // const { id } = useParams();
  const formik = useFormik({
    initialValues : {
    subject: '',
    title: '',
    authors: '',
    publisher: '',
    edition: '',
    noofpages: '',
    isbn: '',
    shelfno: '',
   },  
  
  validate : (values) =>{
    let error ={};
    if(!values.subject){
      error.subject ="Please enter the Subject"
    }
    if(values.subject&&(values.subject.length <=2 ||values.subject.length >15)){
      error.subject = "Subject-name must be between 3 to 15 characters"
    }
    if (!values.title){
      error.title="Please enter the title"
    }
    if (values.title&&(values.title.length <=2 ||values.title.length >20)){
      error.title = "Title must be between 3 to 20 characters"
    }
    if (!values.authors){
      error.authors="Please enter the Authors name"
    }
    if (values.authors&&(values.authors.length <=2 ||values.authors.length >15)){
      error.authors = "Authors name must be between 3 to 15 characters"
    }
    if (!values.publisher){
      error.publisher="Please enter the Publisher name"
    }
    if (values.publisher&&(values.authors.length <=2 ||values.authors.length >25)){
      error.publisher = "Publisher name must be between 3 to 25 characters"
    }
    if (values.noofpages.toString().length >4){
      error.noofpages="Please enter valid Number"
    }
    if (values.edition.toString().length >4){
      error.edition="Please enter valid Number"
    }
    if (values.isbn.toString().length >6){
      error.isbn="Please enter valid Number"
    }
    if (values.shelfno.toString().length >3){
      error.shelfno="Please enter valid Number"
    }

    return error;
  },

  onSubmit : async(values) => {
    try {
      const userdata =await axios.post('https://63a3086c9704d18da083be0e.mockapi.io/books',values);
      navigate.push('/');      
    } catch (error) {
      
    }
    
  }});

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group mb-2">
            <input
              type="name"
              className={`form-control form-control-lg ${formik.errors.subject ? "error-box":""}
              ${formik.touched.subject && !formik.errors.subject ? "success-box":""}`}
              placeholder="Enter Book Subject"
              name="subject"
              value={formik.values.subject}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {
              formik.errors.subject ? <span style={{color:'red'}}>{formik.errors.subject}</span> : null
            }
          </div>
          <div className="form-group mb-2">
            <input
              type="name"
              className={`form-control form-control-lg ${formik.errors.title ? "error-box":""}
              ${formik.touched.title && !formik.errors.title ? "success-box":""}`}
              placeholder="Enter Book Title"
              name="title"
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {
              formik.errors.title ? <span style={{color:'red'}}>{formik.errors.title}</span> : null
            }
          </div>
          <div className="form-group mb-2">
            <input
              type="name"
              className={`form-control form-control-lg ${formik.errors.authors ? "error-box":""}
              ${formik.touched.authors && !formik.errors.authors ? "success-box":""}`}
              placeholder="Enter Book Author(s)"
              name="authors"
              value={formik.values.authors}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
             {
              formik.errors.authors ? <span style={{color:'red'}}>{formik.errors.authors}</span> : null
            }
          </div>
          <div className="form-group mb-2">
            <input
              type="name"
              className={`form-control form-control-lg ${formik.errors.publisher ? "error-box":""}
              ${formik.touched.publisher && !formik.errors.publisher ? "success-box":""}`}
              placeholder="Enter Book Publisher"
              name="publisher"
              value={formik.values.publisher}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
             {
              formik.errors.publisher ? <span style={{color:'red'}}>{formik.errors.publisher}</span> : null
            }
          </div>
          <div className="form-group mb-2">
            <input
              type="number"
              className={`form-control form-control-lg ${formik.errors.edition ? "error-box":""}
              ${formik.touched.edition && !formik.errors.edition ? "success-box":""}`}
              placeholder="Enter Book Edition Number"
              name="edition"
              value={formik.values.edition}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
             {
              formik.touched.edition &&
              formik.errors.edition ? <span style={{color:'red'}}>
                {formik.errors.edition}</span> : null
            }
          </div>
          <div className="form-group mb-2">
            <input
              type="number"
              className={`form-control form-control-lg ${formik.errors.noofpages ? "error-box":""}
              ${formik.touched.noofpages && !formik.errors.noofpages ? "success-box":""}`}
              placeholder="Enter Number of Pages"
              name="noofpages"
              value={formik.values.noofpages}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
             {
              formik.touched.noofpages &&
              formik.errors.noofpages ? <span style={{color:'red'}}>
                {formik.errors.noofpages}</span> : null
            }
          </div>
          <div className="form-group mb-2">
            <input
              type="number"
              className={`form-control form-control-lg ${formik.errors.isbn ? "error-box":""}
              ${formik.touched.isbn && !formik.errors.isbn ? "success-box":""}`}
              placeholder="Enter Book ISBN Number"
              name="isbn"
              value={formik.values.isbn}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {
              formik.touched.isbn &&
              formik.errors.isbn ? <span style={{color:'red'}}>
                {formik.errors.isbn}</span> : null
            }
          </div>
          <div className="form-group mb-2">
            <input
              type="number"
              className={`form-control form-control-lg ${formik.errors.shelfno ? "error-box":""}
              ${formik.touched.shelfno && !formik.errors.shelfno ? "success-box":""}`}
              placeholder="Enter Shelf Number"
              name="shelfno"
              value={formik.values.shelfno}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
             {
              formik.touched.shelfno &&
              formik.errors.shelfno ? <span style={{color:'red'}}>
                {formik.errors.shelfno}</span> : null
            }
          </div>
          <button className="btn btn-primary btn-block w-100">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;