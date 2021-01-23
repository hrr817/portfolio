import React from 'react';
import { useForm } from 'react-hook-form'
import './style.css';

const Contact = () => {
     
     const { register, handleSubmit, errors } = useForm();

     const submitHandler = (data) => {
          window.open(`mailto:ryuu887@gmail.com?subject=${data.subject}&body=Hi, I am ${data.name}.\n${data.message}`)
     }

     return (
          <form className="contact-form flex column" onSubmit={handleSubmit(submitHandler)}>
               <div className="field">
                    { errors.name && 
                    <div className="error"> 
                         { errors.name.type === 'required' && "Please, leave your name with the message." }
                         { errors.name.type === 'minLength' && "Name aren't that short, are they?" }
                         { errors.name.type === 'maxLength' && "If you name is too long, I'll subconsciously skip reading it." }
                    </div> }
                    <label htmlFor="name" className="label">Name *</label>
                    <input className="input-style" name="name" type="text"
                    ref={register({ required: true, minLength: 3, maxLength: 15 })}/>
               </div>
               <div className="field">
                    { errors.subject && 
                    <div className="error"> 
                         { errors.subject.type === 'required' && "Subject is important, right?" }
                         { errors.subject.type === 'maxLength' && "Make subject short and precise. Less than 20 letters." }
                    </div> }
                    <label htmlFor="subject" className="label">Subject *</label>
                    <input className="input-style" name="subject" type="text"
                    ref={register({ required: true, maxLength: 20 })}/>
               </div>
               <div className="field">
                    { errors.message && 
                    <div className="error"> 
                         { errors.message.type === 'required' && "Why you aren't leaving any message? :(" }
                         { errors.message.type === 'minLength' && "Message is too short!" }
                         { errors.message.type === 'maxLength' && <>Thank you for writing so much! <br/> Message should be less than 300 letters.</> }
                    </div> }
                    <label htmlFor="message" className="label">Message *</label>
                    <textarea className="input-style" name="message" style={{height: '230px'}}
                    ref={register({ required: true, minLength: 10, maxLength: 300 })}>
                    </textarea>
               </div>
               <input type="submit" className="input-style submit" value="Submit"/>
          </form>
     )
}

export default Contact
