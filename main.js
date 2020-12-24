
const colleguesDetails = [
    {'name':'Kamrul Islam','designation':'medical information officer', 'id':'04320', 'dateOfJoin':'26 Feb 2019', 'workingDuration':'Year:02 Month:04 Day:17','pCompany':'Delta Pharmaceutical', 'address':'Feni district', 'mobile':'01713656339/01811296879','district':'feni','email':'kamrul@gmail.com'},
    {'name':'Ebrahim Khalil', 'designation':' Senior medical information officer', 'id':'00305', 'dateOfJoin':'14 Jan 2012', 'workingDuration':'Year:02 Month:04 Day:17','pCompany':'---- Pharmaceutical', 'address':'Feni district', 'mobile':'01777779443/01818377997','district':'feni','email':'ibrahim@gmail.com'},
    {'name':'Faysal karim', 'designation':'medical information officer', 'id':'03836', 'dateOfJoin':'19 Mar 2018', 'workingDuration':'Year:02 Month:04 Day:17','pCompany':'Sharif Pharmaceutical', 'address':'Feni district', 'mobile':'01713656117/01644219887','district':'feni','email':'faysal2964@gmail.com'},
    {'name':'Shohel Rana', 'designation':' Senior medical information officer', 'id':'02547', 'dateOfJoin':'15 Mar 2016', 'workingDuration':'Year:02 Month:04 Day:17','pCompany':'ACI Pharmaceutical', 'address':'Rangpur district', 'mobile':'01777780066/01725986282','district':'Rangpur','email':'sohel@gmail.com'},
    {'name':'Harun or rashid', 'designation':'medical information officer', 'id':'04319', 'dateOfJoin':'26 Feb 2019', 'workingDuration':'Year:02 Month:04 Day:17','pCompany':'Kemico Pharmaceutical', 'address':'Noakhali district', 'mobile':'01713656338/01836683860','district':'Noakhali','email':'haron@gmail.com'},
    {'name':'Mishkat Ahmed', 'designation':'Area Manager', 'id':'03711', 'dateOfJoin':'16 Mar 2018', 'workingDuration':'Year:02 Month:04 Day:17','pCompany':'Aristo Pharma Ltd', 'address':'Moulvi bazar district', 'mobile':'01777779546','district':'Moulvi Bazar','email':'mishkatnipro@gmail.com'},
];

function myAction(data){

    let table = document.getElementById('collegues-details');

    table.innerHTML = '';

    for(let i = 0; i < data.length; i++){

        let row = `<tr>
                      <td data-title="Name" class="sl-color">${data[i].name}</td>
                      <td data-title="designation">${data[i].designation}</td>
                      <td data-title="id">${data[i].id}</td>
                      <td data-title="date of join">${data[i].dateOfJoin}</td>
                      <td data-title="working duration">${data[i].workingDuration}</td>
                      <td data-title="previous company">${data[i].pCompany}</td>
                      <td data-title="address">${data[i].address}</td>
                      <td data-title="mobile number">${data[i].mobile}</td>
                      <td data-title="district">${data[i].district}</td>
                      <td data-title="E-mail">${data[i].email}</td>
                  </tr>`
        table.innerHTML += row;
    }

}
myAction(colleguesDetails);
