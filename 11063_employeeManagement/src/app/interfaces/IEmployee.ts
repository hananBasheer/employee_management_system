export interface IEmployee
{   json:any    
    "employeeId":number;
    "employeeName":string;
    "phoneNumber":string;
    "teamName":string;
    "password":string;
 
    "address":
    {
        "street": string;
        "city": string;
        "zipcode": string;

    }

}