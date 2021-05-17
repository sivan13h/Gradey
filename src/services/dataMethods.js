import axios from "axios";

export const getGrades = async () => {
  const response = await axios.get("http://localhost:8000/grades");
  return response.data;
};

export const addGrade = async (newGrade) => {
  await axios.post("http://localhost:8000/grades", {
    name: newGrade.name,
    semester: newGrade.semester,
    grade: newGrade.grade,
    credits: newGrade.credits,
  });
};

export const updateGrade = async (gradeId, updatedGrade) => {
  await axios.patch(`http://localhost:8000/grades/${gradeId}`, updatedGrade);
};

export const deleteGrade = async (gradeId) => {
  await axios.delete(`http://localhost:8000/grades/${gradeId}`);
};
