import {DayType, WeekType} from "../../utils/types";
import {action, makeObservable, observable} from "mobx";

class DiaryStore {
    week?: WeekType = {
        month: "Сентябрь",
        dateStart: new Date(),
        dateEnd: new Date(),

        days: [
            {
                name: "Понедельник",
                date: new Date(),

                subjects: [
                    {
                        title: "",
                        homework: "",
                        marks: []
                    },
                    {
                        title: "",
                        homework: "",
                        marks: []
                    },
                    {
                        title: "",
                        homework: "",
                        marks: []
                    },
                    {
                        title: "",
                        homework: "",
                        marks: []
                    },
                    {
                        title: "",
                        homework: "",
                        marks: []
                    },
                    {
                        title: "",
                        homework: "",
                        marks: []
                    },
                    {
                        title: "",
                        homework: "",
                        marks: []
                    },
                    {
                        title: "",
                        homework: "",
                        marks: []
                    }
                ]
            }
        ]
    };


    constructor() {
        makeObservable(this, {
            week: observable,

            updateWeek: action
        });
    }

    updateWeek = (updates: DayType) => {

    }
}

export default DiaryStore;