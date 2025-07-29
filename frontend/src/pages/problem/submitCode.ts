import axios from 'axios';

const API_URL = import.meta.env.VITE_JUDGE0_API_URL;
const API_KEY = import.meta.env.VITE_JUDGE0_API_KEY;

export async function submitCode({
  source_code,
  language_id,
  stdin = '',
}: {
  source_code: string;
  language_id: number;
  stdin?: string;
}) {
  try {
    console.log(API_URL);
    console.log("Source Code sending \n" + source_code)
    const response = await axios.post(
      `${API_URL}?base64_encoded=false&wait=true`,
      {
        source_code,
        language_id,
        stdin,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Judge0 error:', error);
    throw error;
  }
}
