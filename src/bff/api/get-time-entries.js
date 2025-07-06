import { API_URL } from "../constants";

const TIME_ENTRIES_URL = `${API_URL}/time-entries`;

export const getTimeEntries = async (paramsObj = null) => {
  let url = TIME_ENTRIES_URL;

  try {
    // Adding query parameters if they exist
    if (paramsObj) {
      const queryParams = new URLSearchParams();

      Object.entries(paramsObj).forEach(([key, value]) => {
        queryParams.append(key, value);
      })

      url += `?${queryParams.toString()}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Failed to fetch time entries: ${response.status} ${response.statusText}`,
        { cause: errorData }
      );
    }

    return await response.json();
  } catch(error) {
    console.error('Error getting time entries:', error);

    throw error;
  }
}
