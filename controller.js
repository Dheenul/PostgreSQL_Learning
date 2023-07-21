const pool = require("./connection");
const queries = require("./queries");

const getStudents = async (req, res) => {
    await pool.query(queries.getStudentsQuery, (error, results) => {
      if (error) {
        console.error(error);
      } else {
        res.status(200).json(results.rows);
      }
    });
  };

  const getSubjects = (req, res) =>{
    pool.query(queries.getSubject, (error, results) => {
        if (error) {
          console.error(error);
        } else {
          res.status(200).json(results.rows);
        }
      });
  }

  const getEnrollments = (req, res) =>{
    pool.query(queries.getEnrollments, (error, results) => {
        if (error) {
          console.error(error);
        } else {
          res.status(200).json(results.rows);
        }
      });
  }

  module.exports = {
    getStudents,
    getSubjects,
    getEnrollments,
  }