import axios from "axios";
const baseUrl = "/api/count";

const getCount = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

const increment = async userId => {
  try {
    const res = await axios.put(baseUrl, { id: userId });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default { getCount, increment };
