import {DayType} from "../../utils/types";
import {action, makeObservable, observable} from "mobx";
import {ChangeEvent} from "react";

class DayStore {
    editSelection: { day: DayType | null, edit: boolean } = {
        day: null,
        edit: false
    };

    constructor() {
        makeObservable(this, {
            onEditSubjectTitle: action,
            onEditSubjectHomework: action,
            onEditSubjectMarks: action,

            onEndEditing: action,

            editSelection: observable,
        })
    }

    onClickEdit = (e: any, day: DayType) => {
        this.editSelection = {
            day,
            edit: true
        };
    }

    onEditSubjectTitle = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        this.editSelection.day!.subjects[index].title = e.target.value;
        e.preventDefault();
    }

    onEditSubjectHomework = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        this.editSelection.day!.subjects[index].homework = e.target.value;
        e.preventDefault();
    }

    onEditSubjectMarks = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        this.editSelection.day!.subjects[index].marks.push(Number(e.target.value));
        e.preventDefault();
    }

    onEndEditing = (e: any) => {
        this.editSelection = {
            day: null,
            edit: false
        }
    }
}

export default DayStore;