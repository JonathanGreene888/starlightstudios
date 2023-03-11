import react, { useState } from 'react';
import axios from 'axios';

const CustomerProfile = () => {
    const [projectName, setProjectName] = useState('');
    const [customerName, setCustomerName] = useState('');

    const projectNameOnChangeHandler = event => {
        setProjectName(event.target.value);
    };

    const customerNameOnChangeHandler = event => {
        setCustomerName(event.target.value);
    };

    const addNewPortfolio = () => {
        projectName !== '' && customerName !== '' ?
            axios.post("http://localhost:8000/addportfolio", {
                projectname: projectName,
                customername: customerName
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
            : alert("Must enter project and customer name!")
    }
    return (
        <><br /><button onClick={addNewPortfolio}>
            Add New Portfolio
        </button><br /><br />
            <from>
                Project Name: <input onChange={projectNameOnChangeHandler} value={projectName} />
                Customers Name: <input onChange={customerNameOnChangeHandler} value={customerName} />
            </from>
        </>
    )
}
export default CustomerProfile;