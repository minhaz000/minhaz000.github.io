import React from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
function Contract(props) {

 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4364i3d', 'template_rh8m77m', e.target, 'zw-PU-9PS8Km23rPk')
      .then((result) => {
        toast.success("Message sent successfully !!!")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='connect'>
      <div className="" style={{background:"rgb(0 65 43)"}}>
  
    
  <div className="hero-content  flex-col  py-20">
 
    <h1 className=' text-center text-3xl text-white capitalize mb-5'> Sent me a Message</h1>
        
        <div className="card  w-full max-w-xl shadow-2xl bg-base-200">
      <form className="card-body" onSubmit={sendEmail}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name <span className=' text-red-600 mt-5'> *</span> </span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email <span className=' text-red-600 mt-5'> *</span>  </span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message <span className=' text-red-600 mt-5'> *</span>  </span>
          </label>
          <textarea rows={4} name='message'  type="text" placeholder="message" className="textarea input-bordered" required> </textarea>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  </div>


      </div>
    </div>
  );
}

export default Contract;