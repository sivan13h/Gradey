import axios from "axios";

export const getGrades = async () => {
  const response = await axios.get("https://gradey-api.herokuapp.com/grades");
  return response.data;
};

export const addGrade = async (newGrade) => {
  await axios.post("https://gradey-api.herokuapp.com/grades", {
    name: newGrade.name,
    semester: newGrade.semester,
    grade: newGrade.grade,
    credits: newGrade.credits,
  });
};

export const updateGrade = async (gradeId, updatedGrade) => {
  await axios.patch(
    `https://gradey-api.herokuapp.com/grades/${gradeId}`,
    updatedGrade
  );
};

export const deleteGrade = async (gradeId) => {
  await axios.delete(`https://gradey-api.herokuapp.com/grades/${gradeId}`);
};
