const theaterModels = require("../models/theater.models");

const createSchedule = async (req, res) => {
  try {
    const { body } = req;
    const result = await theaterModels.createSchedule(body);
    res.status(201).json({
      msg: "Create Schedule Success",
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

const readDataStudio = async (req, res) => {
  try {
    let { open_date } = req.query;
    const data = await theaterModels.getDataStudio();
    const result = data.reduce((acc, cur) => {
      const existingItem = acc.find(
        (item) => item.theater_id === cur.theater_id
      );

      if (existingItem) {
        if (!existingItem.open_time.includes(cur.open_time)) {
          existingItem.open_time.push({
            id: cur.id,
            open_time: cur.open_time,
            price: cur.price,
          });
        }
      } else {
        acc.push({
          theater_id: cur.theater_id,
          theater_name: cur.theater_name,
          address: cur.address,
          image: cur.image,
          open_date: cur.open_date,
          open_time: [
            { id: cur.id, open_time: cur.open_time, price: cur.price },
          ],
        });
      }

      return acc;
    }, []);

    console.log(open_date);
    const newResult = open_date
      ? result.filter((item) => {
          const itemDate = new Date(item.open_date).toISOString().split("T")[0];
          return itemDate.includes(open_date);
        })
      : result;
    return res
      .status(200)
      .json({ status: 200, msg: "success get data", data: newResult });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};
const readDataByMovie = async (req, res) => {
  try {
    const { movie_id } = req.params;
    const data = await theaterModels.getByMovie(movie_id);
    const result = data.reduce((acc, cur) => {
      const existingItem = acc.find(
        (item) => item.theater_id === cur.theater_id
      );

      if (existingItem) {
        if (!existingItem.open_time.includes(cur.open_time)) {
          existingItem.open_time.push({
            id: cur.id,
            open_time: cur.open_time,
            price: cur.price,
          });
        }
      } else {
        acc.push({
          theater_id: cur.theater_id,
          theater_name: cur.theater_name,
          address: cur.address,
          image: cur.image,
          open_date: cur.open_date,
          open_time: [
            { id: cur.id, open_time: cur.open_time, price: cur.price },
          ],
        });
      }

      return acc;
    }, []);
    return res
      .status(200)
      .json({ status: 200, msg: "success get data", data: result });
  } catch (error) {
    return res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};
module.exports = {
  createSchedule,
  readDataStudio,
  readDataByMovie,
};
