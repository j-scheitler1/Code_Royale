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
    // console.log('sending code: ', source_code);
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

    const data = response.data;
    let output = '';

    if (data.stdout) {
      output = data.stdout;
    } else if (data.stderr) {
      output = data.stderr;
    } else if (data.compile_output) {
      output = data.compile_output;
    } else {
      output = data.status?.description || 'Unknown error';
    }

    return {
      status: data.status?.description || 'Unknown',
      output: output.trim(),
      raw: data,
    };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      status: 'API Error',
      output: error.message || 'Unknown error',
      raw: error,
    };
  }
}
