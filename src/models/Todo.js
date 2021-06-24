import axios from "axios";
import variables from "../variables";
import logger from "../logger";

async function createAdmin(requestData = {}) {
  try {
    const response = await axios.post(
      `${variables.userServiceURL}/admins`,
      requestData,
      {
        headers: { Accept: "application/json" },
      }
    );

    return response.data.data;
  } catch (error) {
    logger.error(error);
    return null;
  }
}

async function createPartner(requestData = {}) {
  try {
    const response = await axios.post(
      `${variables.userServiceURL}/partners`,
      requestData,
      {
        headers: { Accept: "application/json" },
      }
    );

    return response.data.data;
  } catch (error) {
    logger.error(error);
    return null;
  }
}

export { createAdmin, createPartner };
