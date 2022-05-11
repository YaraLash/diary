import DayStore from "../../stores/Diary/DayStore";
import DiaryStore from "../../stores/Diary/DiaryStore";

export const initStores = () => {
    return {
        diaryStore: new DiaryStore(),
        dayStore: new DayStore()
    }
}