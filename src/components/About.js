import React from "react"

const About = () => {
  return (
    <div style={{
      border: "1px solid black", backgroundColor: " #cfcfff", borderRadius: "10px",
      fontFamily: "auto"
    }} className="container my-5" id="about" >
      <h5>
        <ul className="my-3 ">
          <li className="my-2"> iNotebook is an efficient and user-friendly website designed to help you effortlessly organize your notes. With a simplified and intuitive interface, iNotebook enables you to create an account by signing up or logging in. Once you have access, you can easily add, edit, and delete your notes.
            Key features of iNotebook:</li>
          <li className="my-2" >Note Creation: Create new notes and jot down your thoughts, ideas, reminders, or any important information quickly.</li>
          <li className="my-2" >User Authentication: The website provides a secure login/signup system, ensuring your notes are safe and only accessible to you.</li>
          <li className="my-2" >Note Editing: Easily modify your existing notes whenever you need to update or add more information.</li>
          <li className="my-2" >Note Deletion: If you no longer need a particular note, you can easily delete it to declutter your workspace.</li>
          <li className="my-2"> iNotebook aims to enhance your productivity and simplify the note-taking process by providing a convenient platform for you to manage your notes effectively. Enjoy an organized and structured digital notebook experience with iNotebook!</li>

        </ul>
      </h5>

      <div style={{backgroundColor:"black", width:"30%",color:"wheat" ,textAlign:"center", }} className="container">
       <h4> *** </h4> 
      </div>
    </div>

  )

}

export default About
