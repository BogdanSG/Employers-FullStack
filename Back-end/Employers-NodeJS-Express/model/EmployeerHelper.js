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
                SELECT e.EmployeeID, e.ChiefID as Chief, p.Position, p.PositionID, ei.ImgName, e.FirstName, e.LastName, e.SurName, e.EmploymentDate, e.Salary
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

async function deleteEmployee(EmployeeID){

    try {

        let data = [];

        if(EmployeeID){

            data = await connectionDB.query(`
                DELETE FROM \`employees\` 
                WHERE EmployeeID = ${EmployeeID}
            `, { type: 'DELETE' });

        }//if

        return data;

    }//try
    catch (Ex) {

        throw Ex;

    }//catch

}//deleteEmployee

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

async function getAllPositions() {

    try {

        let data = [];

        data = await connectionDB.query(`
                SELECT p.PositionID, p.Position
                FROM \`positions\` AS p
            `, { type: 'SELECT' });

        return data;

    }//try
    catch (Ex) {

        throw Ex;

    }//catch

}//getTreeEmployee

async function findUserByLogin(login) {

    try {

        if(Login){

            let data = await connectionDB.query(`
                SELECT *
                FROM \`users\` AS u
                WHERE u.Login = '${Login}'
            `, { type: 'SELECT' });

            if(data.length > 0){

                return data[0];

            }//if
            else {

                return null;

            }//else

        }//if

        return null;

    }//try
    catch (Ex) {

        return { error: Ex };

    }//catch

}//getTreeEmployee

async function getEmployeesIDsByChiefID(ChiefID){

    try {

        let data = [];

        if(ChiefID){

            data = await connectionDB.query(`
                SELECT e.EmployeeID FROM \`employees\` AS e
                WHERE e.ChiefID = ${ChiefID}
            `, { type: 'SELECT' });

            return data;

        }//if

        return data;

    }//try
    catch (Ex) {

        return { error: Ex };

    }//catch

}//getEmployeesByChief

async function getEmployeesIDsByPositionID(EmployeesID){

    try {

        let data = [];

        if(EmployeesID){

            data = await connectionDB.query(`
                SELECT e.EmployeeID FROM \`employees\` AS e
                WHERE e.EmployeeID = ${EmployeesID}
            `, { type: 'SELECT' });

            return data;

        }//if

        return data;

    }//try
    catch (Ex) {

        return { error: Ex };

    }//catch

}//getEmployeesIDByPositionID

async function getPositionIDsByEmployeeID(EmployeeID){

    try {

        if(EmployeeID){

            let data = await connectionDB.query(`
                SELECT e.PositionID FROM \`employees\` AS e
                WHERE e.PositionID = ${PositionID}
            `, { type: 'SELECT' });

            if(data.length > 0){

                return data[0].PositionID;

            }//if
            else {

                return null;

            }//else

        }//if

        return null;

    }//try
    catch (Ex) {

        return { error: Ex };

    }//catch

}//getEmployeesIDByPositionID

async function updateChiefID(EmployeeID, ChiefID){

    try {

        if(EmployeeID && ChiefID){

            let data = await connectionDB.query(`
                UPDATE \`employees\` AS e
                SET e.ChiefID = ${ChiefID}
                WHERE e.EmployeeID = ${EmployeeID}
            `, { type: 'UPDATE' });

            return data;

        }//if

        return null;

    }//try
    catch (Ex) {

        return { error: Ex };

    }//catch

}//updateChiefID

module.exports = {
    getTreeEmployee: getTreeEmployee,
    getFullEmployee: getFullEmployee,
    getEmployees: getEmployees,
    getAllPositions: getAllPositions,
    findUserByLogin: findUserByLogin,
    deleteEmployee: deleteEmployee,
    getEmployeesIDsByChiefID: getEmployeesIDsByChiefID,
    getPositionIDsByEmployeeID: getPositionIDsByEmployeeID,
    getEmployeesIDsByPositionID: getEmployeesIDsByPositionID,
    updateChiefID: updateChiefID,
};