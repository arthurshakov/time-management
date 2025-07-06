import { API_URL } from "../constants";

const TIME_ENTRIES_URL = `${API_URL}/time-entries`;

export const getTimeEntries = async () => {
  try {
    const response = await fetch(TIME_ENTRIES_URL);

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
