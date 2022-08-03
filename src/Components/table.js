import React from "react";

function Table() {
    return(
        <>
            <table>
            <tbody>
            <tr>
            <td className="tableHeader">&nbsp;First Name:</td>
            <td className="tableHeader">&nbsp;Last Name:</td>
            <td className="tableHeader">&nbsp;Email:</td>
            </tr>
            <tr>
            <td>&nbsp;Michael</td>
            <td>&nbsp;Soucek</td>
            <td>&nbsp;michaelsoucek73@gmail.com</td>
            </tr>
            <tr>
            <td>&nbsp;Anneli</td>
            <td>&nbsp;Soucek</td>
            <td>&nbsp;avisnapuu@scu@edu.com</td>
            </tr>
            </tbody>
            </table>
        </>
    )
}

export default Table;