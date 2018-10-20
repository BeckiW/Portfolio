import React from "react"
import "./style.css"



class ContactPage extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""

    }
  }


  handleSubmit = () =>  {



  }


  queryChange = (evt) => {
  this.setState({query: evt.target.value})
}


   render() {
     return (

       <form className="ContactItem">

       <h2> Contact me </h2>
       <hr />

       <p> Email me: Becki.Wordsworth - AT - Gmail.com  or fill in the form below. </p>

               <label htmlFor="Name">Name</label>
               <input id="Name" type="text" value={this.props.name} onChange={this.queryChange} />

               <label htmlFor="email">Email Address</label>
               <input id="email" type="email" value={this.props.email} onChange={this.queryChange} />

               <label htmlFor="Message">Message</label>
               <input id="message" type="text" value={this.props.message} onSubmit ={this.queryChange} />

                <input type="submit" value="Submit" onClick={this.handleSubmit}/>


     </form>

     );
   }
 }

export default ContactPage
