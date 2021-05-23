import axios from "axios";

export const getGrades = async () => {
  try {
    const response = await axios.get("https://gradey-api.herokuapp.com/grades");
    const gradesArr = response.data;
    if (gradesArr.length > 0) {
      return gradesArr;
    } else {
      return [
        { name: "Example Grade", grade: 3, credits: 2, semester: 325253 },
      ];
    }
  } catch (error) {
    alert(error);
    return [];
  }
};

export const addGrade = async (newGrade) => {
  try {
    await axios.post("https://gradey-api.herokuapp.com/grades", {
      name: newGrade.name,
      semester: newGrade.semester,
      grade: newGrade.grade,
      credits: newGrade.credits,
    });
  } catch (error) {
    alert(error);
  }
};

export const updateGrade = async (gradeId, updatedGrade) => {
  try {
    await axios.patch(
      `https://gradey-api.herokuapp.com/grades/${gradeId}`,
      updatedGrade
    );
  } catch (error) {
    alert(error);
  }
};

export const deleteGrade = async (gradeId) => {
  try {
    await axios.delete(`https://gradey-api.herokuapp.com/grades/${gradeId}`);
  } catch (error) {
    alert(error);
  }
};
