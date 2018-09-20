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

async function getShortEmployee(EmployeeID) {

    try {

        let data = [];

        if(EmployeeID){

            data = await connectionDB.query(`
                SELECT e.EmployeeID, p.Position, p.PositionID, ei.ImgName, e.FirstName, e.LastName, e.SurName
                FROM \`employees\` AS e
                JOIN \`positions\` AS p ON p.PositionID = e.PositionID
                LEFT JOIN \`employee_imgs\` AS ei ON ei.EmployeeImgID = e.EmployeeImgID
                WHERE e.EmployeeID = '${EmployeeID}'
            `, { type: 'SELECT' });

        }//if

        return data;

    }//try
    catch (Ex) {

        throw Ex;

    }//catch

}//getShortEmployee

async function deleteEmployee(EmployeeID){

    try {

        let data = [];

        if(EmployeeID){

            let EmployeeImgID = await getEmployeeImgIDByEmployeeID(EmployeeID);

            data = await connectionDB.query(`
                DELETE FROM \`employees\` 
                WHERE \`EmployeeID\` = ${EmployeeID}
            `, { type: 'DELETE' });

            if(EmployeeImgID){

                await connectionDB.query(`
                DELETE FROM \`employee_imgs\` 
                WHERE \`EmployeeImgID\` = ${EmployeeImgID}
            `, { type: 'DELETE' });

            }//if

        }//if

        return data;

    }//try
    catch (Ex) {

        throw Ex;

    }//catch

}//deleteEmployee

async function getEmployees(offset, limit, orderBy, sort, search, searchValue){

    try {

        let data = [];

        let Offset = offset ? offset : 0;
        let Limit = limit ? limit : 0;
        let OrderBy = orderBy ? orderBy : 'EmployeeID';
        let Sort = sort ? sort : 'ASC';
        let Search = search ? search : null;
        let SearchValue = searchValue ? searchValue : '';

        let searchString = '';

        if(Search === 'FirstName' || Search === 'LastName' || Search === 'SurName'){

            searchString += `WHERE e.${Search} LIKE '${SearchValue}%'`;

        }//if
        else if(Search){

            searchString = `WHERE e.${Search} = '${SearchValue}'`;

        }//else if

        data = await connectionDB.query(`
        SELECT e.EmployeeID, e.ChiefID, p.PositionID, p.Position, e.EmployeeImgID, e.FirstName, e.LastName, e.SurName, e.EmploymentDate, e.Salary, ei.ImgName
        FROM \`employees\` AS e
        JOIN \`positions\` AS p ON p.PositionID = e.PositionID
        LEFT JOIN \`employee_imgs\` AS ei ON ei.EmployeeImgID = e.EmployeeImgID 
        ${searchString}
        ORDER BY ${OrderBy} ${Sort}
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

async function findUserByLogin(Login) {

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

async function getEmployeesIDsByPositionID(PositionID){

    try {

        let data = [];

        if(PositionID){

            data = await connectionDB.query(`
                SELECT e.EmployeeID FROM \`employees\` AS e
                WHERE e.PositionID = ${PositionID}
            `, { type: 'SELECT' });

            return data;

        }//if

        return data;

    }//try
    catch (Ex) {

        return { error: Ex };

    }//catch

}//getEmployeesIDByPositionID

async function getPositionIDByEmployeeID(EmployeeID){

    try {

        if(EmployeeID){

            let data = await connectionDB.query(`
                SELECT e.PositionID FROM \`employees\` AS e
                WHERE e.EmployeeID = ${EmployeeID}
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

async function getEmployeeImgIDByEmployeeID(EmployeeID) {

    try {

        let data = await connectionDB.query(`
                SELECT e.EmployeeImgID FROM \`employees\` AS e
                WHERE e.EmployeeID = ${EmployeeID} AND e.EmployeeImgID IS NOT NULL
            `, { type: 'SELECT' });


        if(data.length > 0){

            return data[0].EmployeeImgID;

        }//if
        else {

            return null;

        }//else

    }//try
    catch (Ex) {

        return { error: Ex };

    }//catch

}//getEmployeeImgIDByEmployeeID

async function getEmployeeImgNameByEmployeeID(EmployeeID) {

    try {

        if(EmployeeID){

            let data = await connectionDB.query(`
            SELECT ei.ImgName FROM \`employees\` AS e
            JOIN \`employee_imgs\` AS ei ON e.EmployeeImgID = ei.EmployeeImgID
            WHERE e.EmployeeID = ${EmployeeID} AND e.EmployeeImgID IS NOT NULL
        `, { type: 'SELECT' });


            if(data.length > 0){

                return data[0].ImgName;

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

}//getEmployeeImgNameByEmployeeID

async function createOrUpdateImg(EmployeeID, ImgName){

    try {

        if(EmployeeID && ImgName){

            let EmployeeImgID = await getEmployeeImgIDByEmployeeID(EmployeeID);

            if(EmployeeImgID){

                await connectionDB.query(`
                UPDATE \`employee_imgs\` AS ei
                SET ei.ImgName = '${ImgName}'
                WHERE ei.EmployeeImgID = ${EmployeeImgID}
            `, { type: 'UPDATE' });

                return EmployeeImgID;

            }//if
            else {

                let data = await connectionDB.query(`
                INSERT INTO \`employee_imgs\` (\`EmployeeImgID\`, \`ImgName\`)
                VALUES (NULL, '${ImgName}')
            `, { type: 'INSERT' });

                if(data && data[0]){

                    await connectionDB.query(`
                    UPDATE \`employees\`
                    SET \`EmployeeImgID\` = ${data[0]}
                    WHERE \`EmployeeID\` = ${EmployeeID}
            `, { type: 'UPDATE' });

                    return data[0];

                }//if

            }//else

        }//if

        return null;

    }//try
    catch (Ex) {

        return { error: Ex };

    }//catch

}//createOrUpdateImg

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

async function updateEmployee(EmployeeID, ChiefID, EmploymentDate, FirstName, LastName, SurName, Salary, PositionID, EmployeeImgID){

    try {

        if(EmployeeID && EmploymentDate && FirstName && LastName && Salary && PositionID){

            let chiefID = ChiefID ? ChiefID : 'NULL';
            let surName = SurName ? `'${SurName}'` : 'NULL';
            let employeeImgID = EmployeeImgID ? EmployeeImgID : 'NULL';

            let data = await connectionDB.query(`
                UPDATE \`employees\` AS e
                SET e.ChiefID = ${chiefID},
                e.PositionID = ${PositionID},
                e.EmployeeImgID = ${employeeImgID},
                e.FirstName = '${FirstName}',
                e.LastName = '${LastName}',
                e.SurName = ${surName},
                e.Salary = ${Salary},
                e.EmploymentDate = '${EmploymentDate}'
                WHERE e.EmployeeID = ${EmployeeID}
            `, { type: 'UPDATE' });

            return data;

        }//if

        return null;

    }//try
    catch (Ex) {

        return { error: Ex };

    }//catch

}//updateEmployee

module.exports = {
    getTreeEmployee: getTreeEmployee,
    getFullEmployee: getFullEmployee,
    getShortEmployee: getShortEmployee,
    getEmployees: getEmployees,
    getAllPositions: getAllPositions,
    findUserByLogin: findUserByLogin,
    deleteEmployee: deleteEmployee,
    getEmployeesIDsByChiefID: getEmployeesIDsByChiefID,
    getPositionIDByEmployeeID: getPositionIDByEmployeeID,
    getEmployeesIDsByPositionID: getEmployeesIDsByPositionID,
    getEmployeeImgIDByEmployeeID: getEmployeeImgIDByEmployeeID,
    getEmployeeImgNameByEmployeeID: getEmployeeImgNameByEmployeeID,
    updateChiefID: updateChiefID,
    updateEmployee: updateEmployee,
    createOrUpdateImg: createOrUpdateImg,
};