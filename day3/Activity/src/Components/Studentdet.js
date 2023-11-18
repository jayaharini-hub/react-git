import React from 'react';
const Studentdet = ({name,roll,email,phone,blood}) =>{
    return(
        <>
        <form className='k'>
        <table border={10} height='300px' width={300} className='l'>
            <tr>
                <td>Student Name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Roll Number</td>
                <td>{roll}</td>
            </tr>
            <tr>
                <td>Email id</td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Phone number</td>
                <td>{phone}</td>
            </tr>
            <tr>
                <td>Blood group</td>
                <td>{blood}</td>
            </tr>
        </table>
        </form>
        </>
    )
}
export default Studentdet;