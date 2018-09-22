<?php

namespace App\Http\Helpers;
use \Exception;
use \DB;

class EmployeerHelper {

    public static function getTreeEmployee($EmployeeID = null) {

        try {

            $data = [];

            if($EmployeeID){

                $data = DB::select('
                SELECT e.EmployeeID, e.FirstName, e.LastName, e.SurName, p.PositionID, p.Position, (SELECT COUNT(*) FROM `employees` AS ee WHERE ee.ChiefID = e.EmployeeID) as CountEmployees
                FROM `employees` AS e
                JOIN `positions` AS p ON p.PositionID = e.PositionID
                WHERE e.ChiefID = :EmployeeID
            ', [ 'EmployeeID' => $EmployeeID ]);

            }//if
            else {

                $data = DB::select('
                SELECT e.EmployeeID, e.FirstName, e.LastName, e.SurName, p.PositionID, p.Position, (SELECT COUNT(*) FROM `employees` AS ee WHERE ee.ChiefID = e.EmployeeID) as CountEmployees
                FROM `employees` AS e
                JOIN `positions` AS p ON p.PositionID = e.PositionID
                WHERE e.PositionID = 1
            ');

            }//else

            return $data;

        }//try
        catch (Exception $ex) {

            throw $ex;

        }//catch

    }//getTreeEmployee

    public static function getFullEmployee($EmployeeID) {

        try {

            $data = [];

            if($EmployeeID){

                $data = DB::select('
                SELECT e.EmployeeID, e.ChiefID as Chief, p.Position, p.PositionID, ei.ImgName, e.FirstName, e.LastName, e.SurName, e.EmploymentDate, e.Salary
                FROM `employees` AS e
                JOIN `positions` AS p ON p.PositionID = e.PositionID
                LEFT JOIN `employee_imgs` AS ei ON ei.EmployeeImgID = e.EmployeeImgID
                WHERE e.EmployeeID = :EmployeeID
            ', [ 'EmployeeID' => $EmployeeID ]);

                if(count($data) > 0 && $data[0]->Chief){

                    $data[0]->Chief = DB::select('
                SELECT e.EmployeeID, p.Position, e.FirstName, e.LastName, e.SurName
                FROM `employees` AS e
                JOIN `positions` AS p ON p.PositionID = e.PositionID
                WHERE e.EmployeeID = :Chief
            ', ['Chief' => $data[0]->Chief]);

                }//if

            }//if

            return $data;

        }//try
        catch (Exception $ex) {

            throw $ex;

        }//catch

    }//getFullEmployee

    public static function getShortEmployee($EmployeeID){

        try {

            $data = [];

        if($EmployeeID){

            $data = DB::select('
                SELECT e.EmployeeID, p.Position, p.PositionID, ei.ImgName, e.FirstName, e.LastName, e.SurName
                FROM `employees` AS e
                JOIN `positions` AS p ON p.PositionID = e.PositionID
                LEFT JOIN `employee_imgs` AS ei ON ei.EmployeeImgID = e.EmployeeImgID
                WHERE e.EmployeeID = :EmployeeID
            ', ['EmployeeID' => $EmployeeID]);

        }//if

        return $data;

    }//try
        catch (Exception $ex) {

            throw $ex;

        }//catch

    }//getShortEmployee

    public static function deleteEmployee($EmployeeID){

        try {

            $data = [];

            if($EmployeeID){

                $EmployeeImgID = EmployeerHelper::getEmployeeImgIDByEmployeeID($EmployeeID);

                $data = DB::statement('
                DELETE FROM `employees`
                WHERE `EmployeeID` = :EmployeeID
            ', ['EmployeeID' => $EmployeeID]);

                if($EmployeeImgID){

                    DB::statement('
                DELETE FROM `employee_imgs`
                WHERE `EmployeeImgID` = :EmployeeImgID
            ', ['EmployeeImgID' => $EmployeeImgID]);

                }//if

            }//if

            return $data;

        }//try
        catch (Exception $ex) {

            throw $ex;

        }//catch

    }//deleteEmployee

    public static function getEmployees($offset, $limit, $orderBy, $sort, $search, $searchValue){

        try {

            $data = [];

            $Offset = $offset ? $offset : 0;
            $Limit = $limit ? $limit : 0;
            $OrderBy = $orderBy ? $orderBy : 'EmployeeID';
            $Sort = $sort ? $sort : 'ASC';
            $Search = $search ? $search : null;
            $SearchValue = $searchValue ? $searchValue : '';

            $searchString = '';

            if($Search === 'FirstName' || $Search === 'LastName' || $Search === 'SurName'){

                $searchString += "WHERE e.${Search} LIKE '${SearchValue}%'";

            }//if
            else if($Search){

                $searchString = "WHERE e.${Search} = '${SearchValue}'";

            }//else if

            $data = DB::select("
        SELECT e.EmployeeID, e.ChiefID, p.PositionID, p.Position, e.EmployeeImgID, e.FirstName, e.LastName, e.SurName, e.EmploymentDate, e.Salary, ei.ImgName
        FROM `employees` AS e
        JOIN `positions` AS p ON p.PositionID = e.PositionID
        LEFT JOIN `employee_imgs` AS ei ON ei.EmployeeImgID = e.EmployeeImgID
        ${searchString}
        ORDER BY ${OrderBy} ${Sort}
        LIMIT ${Limit} OFFSET ${Offset}
        ");

            return $data;

        }//try
        catch (Exception $ex) {

            throw $ex;

        }//catch

    }//getEmployees

    public static function getAllPositions(){

        try {

            $data = [];

            $data = DB::select('
                SELECT p.PositionID, p.Position
                FROM `positions` AS p
            ');

            return $data;

        }//try
        catch (Exception $ex) {

            throw $ex;

        }//catch

    }//getAllPositions

    public static function findUserByUserName($UserName){

        try {

            if($UserName){

                $data = DB::select('
                SELECT *
                FROM `users` AS u
                WHERE u.username = :UserName
            ', ['UserName' => $UserName]);

                if(count($data) > 0){

                    return $data[0];

                }//if
                else {

                    return null;

                }//else

            }//if

            return null;

        }//try
        catch (Exception $ex) {

            return ['error' => $ex];

        }//catch

    }//findUserByUserName

    public static function getEmployeesIDsByChiefID($ChiefID){

        try {

            $data = [];

            if($ChiefID){

                $data = DB::select('
                SELECT e.EmployeeID FROM `employees` AS e
                WHERE e.ChiefID = ${ChiefID}
            ');

                return $data;

            }//if

            return $data;

        }//try
        catch (Exception $ex) {

            return $ex;

        }//catch


    }//getEmployeesIDsByChiefID

    public static function getEmployeesIDsByPositionID($PositionID){

        try {

            $data = [];

            if($PositionID){

                $data = DB::select('
                SELECT e.EmployeeID FROM `employees` AS e
                WHERE e.PositionID = :PositionID
            ', ['PositionID' => $PositionID]);

                return $data;

            }//if

            return $data;

        }//try
        catch (Exception $ex) {

            return $ex;

        }//catch

    }//getEmployeesIDsByPositionID

    public static function getPositionIDByEmployeeID($EmployeeID){

        try {

            if($EmployeeID){

                $data = DB::select('
                SELECT e.PositionID FROM `employees` AS e
                WHERE e.EmployeeID = :EmployeeID
            ', ['EmployeeID' => $EmployeeID]);

                if(count($data) > 0){

                    return $data[0]->PositionID;

                }//if
                else {

                    return null;

                }//else

            }//if

            return null;

        }//try
        catch (Exception $ex) {

            return $ex;

        }//catch

    }//getPositionIDByEmployeeID

    public static function getEmployeeImgIDByEmployeeID($EmployeeID){

        try {

            $data = DB::select('
                SELECT e.EmployeeImgID FROM `employees` AS e
                WHERE e.EmployeeID = :EmployeeID AND e.EmployeeImgID IS NOT NULL
            ', ['EmployeeID' => $EmployeeID]);


            if(count($data) > 0){

                return $data[0]->EmployeeImgID;

            }//if
            else {

                return null;

            }//else

        }//try
        catch (Exception $ex) {

            return $ex;

        }//catch

    }//getEmployeeImgIDByEmployeeID

    public static function getEmployeeImgNameByEmployeeID($EmployeeID){

        try {

            if($EmployeeID){

                $data = DB::select('
                SELECT ei.ImgName FROM `employees` AS e
                JOIN `employee_imgs` AS ei ON e.EmployeeImgID = ei.EmployeeImgID
                WHERE e.EmployeeID = ${EmployeeID} AND e.EmployeeImgID IS NOT NULL
            ', ['EmployeeID' => $EmployeeID]);


                if(count($data) > 0){

                    return $data[0]->ImgName;

                }//if
                else {

                    return null;

                }//else


            }//if

            return null;

        }//try
        catch (Exception $ex) {

            return $ex;

        }//catch

    }//getEmployeeImgNameByEmployeeID

    public static function createOrUpdateImg($EmployeeID, $ImgName){

        try {

            if($EmployeeID && $ImgName){

                $EmployeeImgID = EmployeerHelper::getEmployeeImgIDByEmployeeID($EmployeeID);

                if($EmployeeImgID){

                    DB::statement('
                UPDATE `employee_imgs` AS ei
                SET ei.ImgName = :ImgName
                WHERE ei.EmployeeImgID = :EmployeeImgID
            ', ['EmployeeImgID' => $EmployeeImgID, 'ImgName' => $ImgName]);

                    return $EmployeeImgID;

                }//if
                else {

                    $data = DB::statement("
                INSERT INTO `employee_imgs` (`EmployeeImgID`, `ImgName`)
                VALUES (NULL, '${ImgName}')
                ");

                    if($data && $data[0]){

                        DB::statement('
                    UPDATE `employees`
                    SET `EmployeeImgID` = :EmployeeImgID
                    WHERE `EmployeeID` = :EmployeeID
            ', ['EmployeeID' => $EmployeeID, 'EmployeeImgID' => $data[0]]);

                        return $data[0];

                    }//if

                }//else

            }//if

            return null;

        }//try
        catch (Exception $ex) {

            return $ex;

        }//catch

    }//createOrUpdateImg

    public static function updateChiefID($EmployeeID, $ChiefID){

        try {

            if($EmployeeID && $ChiefID){

                $data = DB::select('
                UPDATE `employees` AS e
                SET e.ChiefID = :ChiefID
                WHERE e.EmployeeID = :EmployeeID
            ', ['EmployeeID' => $EmployeeID, 'ChiefID' => $ChiefID]);

                return $data;

            }//if

            return null;

        }//try
        catch (Exception $ex) {

            return $ex;

        }//catch

    }//updateChiefID

    public static function updateEmployee($EmployeeID, $ChiefID, $EmploymentDate, $FirstName, $LastName, $SurName, $Salary, $PositionID, $EmployeeImgID){

        try {

            if($EmployeeID && $EmploymentDate && $FirstName && $LastName && $Salary && $PositionID){

                $chiefID = $ChiefID ? $ChiefID : 'NULL';
                $surName = $SurName ? "'${SurName}'" : 'NULL';
                $employeeImgID = $EmployeeImgID ? $EmployeeImgID : 'NULL';

                $data = DB::select('
                UPDATE `employees` AS e
                SET e.ChiefID = :chiefID,
                e.PositionID = :PositionID,
                e.EmployeeImgID = :employeeImgID,
                e.FirstName = :FirstName,
                e.LastName = :LastName,
                e.SurName = :surName,
                e.Salary = :Salary,
                e.EmploymentDate = :EmploymentDate
                WHERE e.EmployeeID = :EmployeeID
            ', ['chiefID' => $chiefID, 'PositionID' => $PositionID, 'employeeImgID' => $employeeImgID, 'FirstName' => $FirstName, 'LastName' => $LastName, 'surName' => $surName, 'Salary' => $Salary, 'EmploymentDate' => $EmploymentDate, 'EmployeeID' => $EmployeeID]);

                return $data;

            }//if

            return null;

        }//try
        catch (Exception $ex) {

            return $ex;

        }//catch

    }//updateEmployee

}//EmployeerHelper