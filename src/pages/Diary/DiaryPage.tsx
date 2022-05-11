import React from "react";
import WeekComponent from "./components/WeekComponent";
import DiaryStore from "../../stores/Diary/DiaryStore";
import DayStore from "../../stores/Diary/DayStore";
import {inject, observer} from "mobx-react";
import StoresNameIdentification from "../../utils/consts/storesNameIdentification";

interface DiaryProps {
    diaryStore?: DiaryStore,
    dayStore?: DayStore
}

@inject(
    StoresNameIdentification.DiaryStore,
    StoresNameIdentification.DayStore
)
class DiaryPage extends React.Component<DiaryProps> {
    render() {
        const {diaryStore, dayStore} = this.props;

        return (
            <div>
                <WeekComponent week={diaryStore?.week} dayStore={dayStore} />
            </div>
        );
    }
}

export default DiaryPage;