export const addCampus = (Campus) => {
	return {
		type: 'ADD_CAMPUS',
		payload: Campus
	};
};

export const removeCampus = (Campus) => {
	return {
		type: 'REMOVE_CAMPUS',
		payload: Campus
	};
};

export const editCampus = (oldCampus, newCampus) => {
	return {
		type: 'EDIT_CAMPUS',
		payload: {
			oldCampus: oldCampus,
			newCampus: newCampus
		}
	};
};

export const selectCampus = (Campus) => {
	return {
		type: "SELECT_CAMPUS",
		payload: Campus
	}
};

export const addStudent = (Student) =>{
    return {
    type: 'ADD_STUDENT',
    payload: Student
    };
};

export const selectStudent = (Student) => {
    return {
    type: "Select Student",
    payload: Student
    }
};
