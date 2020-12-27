//working duration start
 

function calculate_age(x){
    var birth_date = new Date(x);
    var birth_date_day = birth_date.getDate();
    var birth_date_month = birth_date.getMonth();
    var birth_date_year = birth_date.getFullYear();

    var toDay_date = new Date();
    var toDay_date_day = toDay_date.getDate();
    var toDay_date_month = toDay_date.getMonth();
    var toDay_date_year = toDay_date.getFullYear();

    var calculated_age = 0;
    var calculated_month = 0;
    var calculated_day = 0; 
    var calculated_age = toDay_date_year - birth_date_year;
    

    if(toDay_date_day > birth_date_day){
        calculated_day = toDay_date_day - birth_date_day;
        calculated_age = toDay_date_year - birth_date_year;
        calculated_month = toDay_date_month - birth_date_month;
   }else if(toDay_date_day < birth_date_day){
        calculated_day = (toDay_date_day + 30) - birth_date_day;
        calculated_month = toDay_date_month - birth_date_month - 1;
        calculated_age = toDay_date_year - birth_date_year - 1;
   }else if(toDay_date_month > birth_date_month){
        calculated_age = toDay_date_year - birth_date_year;
        calculated_month = toDay_date_month - birth_date_month;
   }else if(toDay_date_month < birth_date_month){
        calculated_age = toDay_date_year - birth_date_year - 1;
        calculated_month = (toDay_date_month + 12) - birth_date_month;
   }else{
    calculated_age = toDay_date_year - birth_date_year;
   }

    return ('Year: '+calculated_age+', Month: '+calculated_month+', Day: '+calculated_day);

}
var kamrul = calculate_age("02/26/2019");
var ibrahim = calculate_age("01/14/2012");
var faysal = calculate_age("03/19/2018");
var shohel = calculate_age("03/15/2016");
var haron = calculate_age("02/26/2019");
var mishkat = calculate_age("03/16/2018");

//working duration end



//Colleagues information using object
const colleguesDetails = [
    {'name':'Kamrul Islam','designation':'medical information officer', 'id':'04320', 'dateOfJoin':'26 Feb 2019', 'workingDuration':`${kamrul}`,'pCompany':'Delta Pharmaceutical', 'address':'House:338 Hazi omar ali bary, Vill: Middle Charipur, PO:Feni Sadar-3900, PS:feni sadar, Dist: Feni.', 'mobile':'01713656339/ 01811296879','district':'feni','email':'----@gmail.com'},
    {'name':'Ebrahim Khalil', 'designation':' Senior medical information officer', 'id':'00305', 'dateOfJoin':'14 Jan 2012', 'workingDuration':`${ibrahim}`,'pCompany':'---- Pharmaceutical', 'address':'Vill:Maolana shaheber bari, South manikpur, PO:Manikpur-3860, PS:Senbag, Dist:Noakhali.', 'mobile':'01777779443/ 01818377997','district':'Noakhali','email':'-----@gmail.com'},
    {'name':'Faysal karim', 'designation':'medical information officer', 'id':'03836', 'dateOfJoin':'19 Mar 2018', 'workingDuration':`${faysal}`,'pCompany':'Sharif Pharmaceutical', 'address':'Vill:Bazlur Rahman Master bari, East Kashipur, PO:Kashipur, PS:Chagolnaiya, Dist:Feni.', 'mobile':'01713656117/ 01644219887','district':'feni','email':'faysal2964@gmail.com'},
    {'name':'Shohel Rana', 'designation':' Senior medical information officer', 'id':'02547', 'dateOfJoin':'15 Mar 2016', 'workingDuration':`${shohel}`,'pCompany':'ACI Pharmaceutical', 'address':'Vill:Rajman Dohopara,Rajman, PO:Rajman-6762, PS:Ullapara, Dist:Sirajganj.', 'mobile':'01777780066/ 01725986282','district':'Sirajganj','email':'----@gmail.com'},
    {'name':'Harun or rashid', 'designation':'medical information officer', 'id':'04319', 'dateOfJoin':'26 Feb 2019', 'workingDuration':`${haron}`,'pCompany':'Kemico Pharmaceutical', 'address':'Noakhali district', 'mobile':'01713656338/ 01836683860','district':'Noakhali','email':'-----@gmail.com'},
    {'name':'Mishkat Ahmed', 'designation':'Area Manager', 'id':'03711', 'dateOfJoin':'16 Mar 2018', 'workingDuration':`${mishkat}`,'pCompany':'Aristo Pharma Ltd', 'address':'Vill:Sankarpur, PO:Dasher Bazar, PS:Baralekha, Dist:Moulvi Bazar', 'mobile':'01777779546','district':'Moulvi Bazar','email':'mishkatnipro@gmail.com'},
];

//create a function for displaying object items into a table for dynamically
function myAction(data){

    let table = document.getElementById('collegues-details');

    table.innerHTML = '';

    for(let i = 0; i < data.length; i++){

        let row = `<tr>
                      <td data-title="Name" class="sl-color">${data[i].name}</td>
                      <td data-title="designation" style="text-transform:capitalize">${data[i].designation}</td>
                      <td data-title="id">${data[i].id}</td>
                      <td data-title="date of join">${data[i].dateOfJoin}</td>
                      <td data-title="working duration">${data[i].workingDuration}</td>
                      <td data-title="previous company" style="text-transform:capitalize">${data[i].pCompany}</td>
                      <td data-title="address" style="text-transform:capitalize">${data[i].address}</td>
                      <td data-title="mobile number">${data[i].mobile}</td>
                      <td data-title="district">${data[i].district}</td>
                      <td data-title="E-mail" style="text-transform:lowercase">${data[i].email}</td>
                  </tr>`
        table.innerHTML += row;
    }

}
myAction(colleguesDetails);
