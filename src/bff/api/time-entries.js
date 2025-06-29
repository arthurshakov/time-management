import { API_URL } from "../constants";

const TIME_ENTRIES_URL = `${API_URL}/time-entries`;

export const saveTimeEntry = async (entry) => {
  try {
    const response = await fetch(TIME_ENTRIES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      throw new Error(
        `Failed to save time entry: ${response.status} ${response.statusText}`,
        { cause: errorData }
      );
    }

    return await response.json();
  } catch(error) {
    console.error('Error saving time entry:', error);

    throw error; // Re-throw to let calling code handle it
  }
};

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

    throw error; // Re-throw to let calling code handle it
  }
}
