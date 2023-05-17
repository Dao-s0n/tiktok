// import { useState} from 'react'
// import Content from './content'


// const infos = [
//    ' Dao son',
//      21,
//      'Ha Noi'
// ]
// function App() {
  // const [counter, setCounter] = useState(1)
  // const tang = () => {
  //   setCounter(counter +1)}
 
  // const [info, setinfo] = useState()
  // const randomInfo = () =>
  // {
  //   const index = Math.floor(Math.random() * infos.length)
  //   setinfo(infos[index])
  // }
  // return (
  //   <div className="App">
  //     <h1>{info || 'chưa có phần thưởng'}</h1>
  //     <button onClick={randomInfo}>lấy info</button>
  //   </div>
  // );




 // const [info, setinfo] = useState({
  //   name: ' Dao son',
  //   age: 21,
  //   address: 'Ha Noi'
  // })
// const update = () => {
  //   setinfo({
  //     ...info,
  //     bio:'iu be ^^'
  //   })
  // }
  // //return (
  //   <div className="App">
  //     <h1>{JSON.stringify(info)}</h1>
  //     <button onClick={update}>Update</button>
  //   </div>
  // );



// tow-way bindinng   *****
// const courses = [ 
//   {
//     id:1,
//     name:'HTML,CSS'
// } ,
// {
//   id:2,
//   name:'jacascript'
// } ,
// {
//   id:3,
//   name:'Reactjs'
// } ,
// ]

//         //checkox
// const [checked, setChaecked] = useState([])
// const handleCheck = (id) => {
// setChaecked(pre => {
//   const isChecked = checked.includes(id)
//  if (isChecked){
//   return checked.filter(item => item != id)
//  }else {
//   return [...pre, id]
//  }
// })
// }

// const handleSubmit = () => {
//   //call API
//   console.log({ids: checked})
// }
//   return (
//     <div className="App" style={{padding: 32}}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//           type='checkbox'
//           checked={checked.includes( course.id)}
//           onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
    
//     <button onClick={handleSubmit}>Register</button>
//      </div>
//  );        ************
          //radio
// const [checked, setChaecked] = useState(2)

// const handleSubmit = () => {
  
// }
//   return (
//     <div className="App" style={{padding: 32}}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//           type='radio'
//           checked={checked === course.id}
//           onChange={() => setChaecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
    
//     <button onClick={handleSubmit}>Register</button>
//     </div>
 // );
        //input
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // const handleSubmit = () => {
  //   console.log({
  //     name,email
  //   })
  // }
  //   return (
  //     <div className="App" style={{padding: 32}}>
  //     <input
  //     value={name}
  //     onChange={e => setName(e.target.value)}
  //     />
  //       <input
  //     value={email}
  //     onChange={e => setEmail(e.target.value)}
  //     />
  //     <button onClick={handleSubmit}>Register</button>
  //     </div>
  //   );


      //thêm
      
  // const [job, setJob] = useState('')
  // const [jobs, setJobs] = useState(() => {
  //   const storagejobs = JSON.parse(localStorage.getItem('jobs'))
  //   return storagejobs ?? []
  // })
  // const handleSubmit = () => {
  //    setJobs (prea => {
  //     const newjobs = [...prea, job]
  //     //save to local storage
  //     const jsonjobs = JSON.stringify(newjobs)
  //     localStorage.setItem('jobs', jsonjobs)
  //     return newjobs
  //    })
  //     setJob('')
  // }

// return (
//    <div className="App" style={{padding: 32}}>
     
        
//         <input
//           value={job}
//           onChange={e => setJob(e.target.value)}
//           />
         
//         <button onClick={handleSubmit}>Add</button>
//         <ul>
//           {jobs.map((job, index) => (
//             <li key={index}>{job}</li>
//           ))
//           }
//         </ul>
//     </div>
//   );


//      const [show, setShow] = useState(false)
//      return (
//        <div style={{padding: 30}}>
//          <button onClick={() => setShow(!show)}> Toggle</button>
//          {show && <Content />}

//      </div>
//       )

// }export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import { publicRoutes } from "~/routes";
import  {DefaultLayout} from "~/layouts";
import { Fragment } from "react";



function App
() {
  return ( 
    <Router>
      <div className="App">
        <Routes>
          

                {publicRoutes.map((route, index) => {
                  
                   const Page = route.component;

                   let Layout = DefaultLayout

                    if(route.layout){
                      Layout = route.layout
                    }else if(route.layout ===null){
                      Layout = Fragment
                    }

                  return (
                    <Route key={index} 
                    path={route.path} 
                    element={
                 <Layout>
                      <Page />
                     </Layout>
                  }/>
                  )
                })}

        </Routes>
      </div>
    </Router>
   );
}

export default App;

