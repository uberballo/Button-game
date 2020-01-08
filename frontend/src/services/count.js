import axios from "axios";
const baseUrl = "/api/count";

const getCount = async () => {
  const request = await axios.get(baseUrl);
  console.log(request.data);
  return request.then(response => response.data);
};

export default { getCount };
