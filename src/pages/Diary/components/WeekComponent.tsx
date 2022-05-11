import React from "react";
import {WeekType} from "../../../utils/types";
import DayStore from "../../../stores/Diary/DayStore";
import DayComponent from "./DayComponent";
import {inject, observer} from "mobx-react";
import StoresNameIdentification from "../../../utils/consts/storesNameIdentification";

interface WeekComponentProps {
    week?: WeekType,
    dayStore?: DayStore
}

@inject(StoresNameIdentification.DayStore)
@observer
class WeekComponent extends React.Component<WeekComponentProps> {
    render() {
        const {week, dayStore} = this.props;

        return (
            <div>
                {week?.days.map(day => {
                    return <DayComponent key={day.name + day.date.toString()} day={day} dayStore={dayStore} />
                })}
            </div>
        );
    }
}

export default WeekComponent;