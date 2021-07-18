import React from 'react'
// import { Navbar, Nav } from "react-bootstrap"
import Navbar from './Navbar'
import AddFileButton from './AddFIleButton';
import AddFolderButton from './AddFolderButton';
function Dashboard() {
    return (
        <>
           <Navbar/>
           <AddFileButton/>
           <AddFolderButton/>
        </>
         
    )
}

export default Dashboard;