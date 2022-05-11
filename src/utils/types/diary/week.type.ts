import {DayType} from "./day.type";

export type WeekType = {
    month: string,
    dateStart: Date,
    dateEnd: Date,
    days: DayType[]
}