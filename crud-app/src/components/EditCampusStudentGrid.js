import React, {Component} from 'react';
import Header from './Header.js';
import EditCampusStudentCard from './EditCampusStudentCard.js';
import './StudentGrid.css';
import { Link } from 'react-router-dom'

class CampusStudentGrid extends Component{

	render(){
		return (
			<div className="studentsPage">
				<div className="studentGridTop">
					<h1>Students</h1>
				</div>
				<div className="studentGridView">
					{this.props.students.map(singleStudent => (
						<EditCampusStudentCard studentId={singleStudent.id} name={singleStudent.name} campusName={singleStudent.college} imageLink={singleStudent.img} />
						))}
				</div>
			</div>
		);
	}
}

export default CampusStudentGrid;