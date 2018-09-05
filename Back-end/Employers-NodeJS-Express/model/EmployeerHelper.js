const connectionDB = require('../database/connectionDB');

async function getTreeEmployee(EmployeeID) {

    try {

        let data = [];

        if(EmployeeID){

            data = await connectionDB.query(`
                SELECT e.EmployeeID, e.FirstName, e.LastName, e.SurName, p.PositionID, p.Position, (SELECT COUNT(*) FROM \`employees\` AS ee WHERE ee.ChiefID = e.EmployeeID) as CountEmployees
                FROM \`employees\` AS e
                JOIN \`positions\` AS p ON p.PositionID = e.PositionID
                WHERE e.ChiefID = '${EmployeeID}'
            `, { type: 'SELECT' });

        }//if
        else {

            data = await connectionDB.query(`
                SELECT e.EmployeeID, e.FirstName, e.LastName, e.SurName, p.PositionID, p.Position, (SELECT COUNT(*) FROM \`employees\` AS ee WHERE ee.ChiefID = e.EmployeeID) as CountEmployees
                FROM \`employees\` AS e
                JOIN \`positions\` AS p ON p.PositionID = e.PositionID
                WHERE e.PositionID = '1'
            `, { type: 'SELECT' });

        }//else

        return data;

    }//try
    catch (Ex) {

        throw Ex;

    }//catch

}//getTreeEmployee

async function getFullEmployee(EmployeeID){

    try {

        let data = [];

        if(EmployeeID){

            data = await connectionDB.query(`
                SELECT e.EmployeeID, e.ChiefID as Chief, p.Position, ei.ImgName, e.FirstName, e.LastName, e.SurName, e.EmploymentDate, e.Salary
                FROM \`employees\` AS e
                JOIN \`positions\` AS p ON p.PositionID = e.PositionID
                LEFT JOIN \`employee_imgs\` AS ei ON ei.EmployeeImgID = e.EmployeeImgID
                WHERE e.EmployeeID = '${EmployeeID}'
            `, { type: 'SELECT' });

            if(data.length > 0 && data[0].Chief){

                data[0].Chief = await connectionDB.query(`
                SELECT e.EmployeeID, p.Position, e.FirstName, e.LastName, e.SurName
                FROM \`employees\` AS e
                JOIN \`positions\` AS p ON p.PositionID = e.PositionID
                WHERE e.EmployeeID = '${data[0].Chief}'
            `, { type: 'SELECT' });

            }//if

        }//if

        return data;

    }//try
    catch (Ex) {

        throw Ex;

    }//catch

}//getFullEmployee

async function getEmployees(offset, limit, orderBy, firstName, lastName, surName){

    try {

        let data = [];

        let Offset = offset ? offset : 0;
        let Limit = limit ? limit : 0;
        let OrderBy = orderBy ? orderBy : 'EmployeeID';
        let FirstName = firstName ? firstName : '%';
        let LastName = lastName ? lastName : '%';
        let SurName = surName ? surName : '%';

        FirstName.trim();
        LastName.trim();
        SurName.trim();

        data = await connectionDB.query(`
        SELECT e.EmployeeID, e.ChiefID, p.PositionID, p.Position, e.EmployeeImgID, e.FirstName, e.LastName, e.SurName, e.EmploymentDate, e.Salary, ei.ImgName
        FROM \`employees\` AS e
        JOIN \`positions\` AS p ON p.PositionID = e.PositionID
        LEFT JOIN \`employee_imgs\` AS ei ON ei.EmployeeImgID = e.EmployeeImgID
        WHERE e.FirstName LIKE '${FirstName}' AND e.LastName LIKE '${LastName}' AND e.SurName LIKE '${SurName}'
        ORDER BY ${OrderBy} ASC
        LIMIT ${Limit} OFFSET ${Offset}
        `, { type: 'SELECT' });

        return data;

    }//try
    catch (Ex) {

        throw Ex;

    }//catch

}//getFullEmployee

module.exports = {
    getTreeEmployee: getTreeEmployee,
    getFullEmployee: getFullEmployee,
    getEmployees: getEmployees
};