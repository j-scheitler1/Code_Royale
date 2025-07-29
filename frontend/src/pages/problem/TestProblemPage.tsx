import Workspace from '../../workspace/Workspace';
import type { Problem } from "../../../../backend/src/types/problem";
// import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const TestProblemPage: React.FC = () => {
  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    console.log("Trying");
    const fetchProblem = async () => {
      try {
        const response = await fetch(`/api/problems`);
        if (!response.ok) throw new Error('Problem not found');
        const data = await response.json();
        console.log(data);
        setProblem(data);
      } catch (err) {
        console.error(err);
        setProblem(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProblem();
  }, []);


  return (
    <>
      {loading && (
        <div></div>
      )}
      {problem && (
        <Workspace problem={problem} />
      )}
    </>
  );
};


export default TestProblemPage;

