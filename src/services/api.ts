import axios from "axios";

export default {
  async getProduct(category: string) {
    return await axios
      .get(`https://bad-api-assignment.reaktor.com/products/${category}`)
      .then((res) => res.data);
  },

  async getManufacturer(manufacturer: string) {
    return await axios
      .get(
        `https://bad-api-assignment.reaktor.com/availability/${manufacturer}`
      )
      .then((res) => res.data);
  },
};
