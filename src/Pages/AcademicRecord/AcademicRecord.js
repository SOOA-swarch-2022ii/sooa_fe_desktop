import React, {Component, useState} from "react";
import "./AcademicRecord.css"
import RegAndAuthService from "../../services/reg_and_auth.service";
import AcademicRecordService from "../../services/academic_record.service";

let color
const result = JSON.parse(localStorage.getItem('user'));
class AcademicRecord extends Component {
    constructor(props) {

        super(props);

        this.state = {
            id: "",
            subjects_pending: "",
            subjects_record: "",
            papa: "",
            papi: "",
            status: "",
            faculty: "",
            campus: "",
            career: "",
        };

        this.setInfoAcademicRecord = this.setInfoAcademicRecord.bind(this);
    }

    setInfoAcademicRecord({id, subjects_pending ,subjects_record ,papa ,papi ,status ,faculty
                    ,campus
                    ,career}) {

        this.setState({
            id,
            subjects_pending,
            subjects_record,
            papa,
            papi,
            status,
            faculty,
            campus,
            career,
        })
    }

    render() {
        if (this.state.status == true){
            color = "green"
        }else {
            color = "red"
        }
        const subjects_pending_list = this.state.subjects_pending.split(",");
        return (
            <div className="record">
                <div>
                    <h1>Historia Académica</h1>
                    <h2>{this.state.career}</h2>
                    <b>Estado: Abierto <span style={{color}}>●</span> </b>
                    <br/>
                    <b>Facultad de {this.state.faculty}, {this.state.campus}</b>
                </div>
                <div className="r2">
                    <div className="sr">
                        <h2 className="srt">Materias cursadas</h2>
                        <h2 className="srt">{this.state.subjects_record}</h2>
                    </div>
                    <div className="sr">
                        <h2 className="srt">Materias pendientes</h2>
                        <h2 className="srt">{subjects_pending_list}</h2>
                    </div>
                    <div className="small">
                        <h2 className="sm">PAPA</h2>
                        <h2 className="sm">{this.state.papa}</h2>
                    </div>
                    <div className="small">
                        <h2 className="sm">PAPI</h2>
                        <h2 className="sm">{this.state.papi}</h2>
                    </div>
                </div>

            </div>
        );
    }

    componentDidMount() {

        AcademicRecordService.getAcademicRecord(result,this.setInfoAcademicRecord);
    }

}
export default AcademicRecord