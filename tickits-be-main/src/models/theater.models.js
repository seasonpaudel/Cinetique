const db = require("../config/supabase");

const createSchedule = async (body) => {
  return new Promise((resolve, reject) => {
    let sqlQuery =
      "INSERT INTO theater_studio (theater_id, open_date, open_time, price, movie_id) VALUES ";
    let values = [];
    body.forEach((element, idx) => {
      if (values.length) sqlQuery += ", ";
      const { theater_id, open_date, open_time, price, movie_id } = element;
      sqlQuery += `($${1 + 5 * idx}, $${2 + 5 * idx}, $${3 + 5 * idx}, $${
        4 + 5 * idx
      }, $${5 + 5 * idx})`;
      values.push(theater_id, open_date, open_time, price, movie_id);
    });
    db.query(sqlQuery, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

// const createSchedule = async (body) => {
//   return new Promise((resolve, reject) => {
//     const { theater_id, open_date, open_time, price, movie_id } = body;
//     const sqlQuery =
//       "INSERT INTO theater_studio (theater_id, open_date, open_time, price, movie_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
//     const values = [theater_id, open_date, open_time, price, movie_id];
//     db.query(sqlQuery, values, (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };

const getDataStudio = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "select ts.id, ts.theater_id, open_time, open_date, t.theater_name, t.address, t.image, ts.price from theater_studio ts join theaters t on ts.theater_id=t.id",
      (error, result) => {
        if (error) reject(error);
        else resolve(result.rows);
      }
    );
  });
};
const getByMovie = (movie_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select ts.theater_id, open_time, open_date, t.theater_name, t.address, t.image, ts.price from theater_studio ts join theaters t on ts.theater_id=t.id where ts.movie_id=$1",
      [movie_id],
      (error, result) => {
        if (error) reject(error);
        else resolve(result.rows);
      }
    );
  });
};

module.exports = {
  createSchedule,
  getDataStudio,
  getByMovie,
};
