const userInfo = async() => {
        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users');
            const userData = await user.json();
            userData.forEach(element => {
                        let tableRow = '';
                        let userDataArray = [];
                        for (const key in element) {
                            if (key === 'address') {
                                userDataArray.push(element[key].street);
                            } else if (key === 'company') {
                                userDataArray.push(element[key].name);
                            } else {
                                userDataArray.push(element[key]);
                            }
                        }
                        tableRow = `<tr>${userDataArray.map((fillData)=> `<td>${fillData}</td>`)}</tr>`;
                        document.getElementById("tb").innerHTML += tableRow; 
        });

    } catch (error) {
        console.log(`SomeThing Went Wrong......`);
    }
}
userInfo();