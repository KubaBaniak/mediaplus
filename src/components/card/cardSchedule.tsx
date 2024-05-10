import { IconType } from "react-icons";
import "./card.scss";
import "./cardSchedule.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

interface ISchedule {
  days: string;
  time: string;
}

interface IScheduleCard {
  title: string;
  secondaryTitle: string;
  text: ISchedule[];
  icon: IconType;
}

export default function ScheduleCard({
  scheduleCardData,
}: {
  scheduleCardData: IScheduleCard;
}) {
  return (
    <div className="card schedule-card">
      <h4>{scheduleCardData.secondaryTitle}</h4>
      <h3>{scheduleCardData.title}</h3>
      <ul className="schedule-card--list">
        {scheduleCardData.text.map((day) => (
          <li className="schedule-card--schedule">
            {day.days}
            <span className="schedule-card--days">{day.time}</span>
          </li>
        ))}
      </ul>
      <button className="button--learn-more">
        Learn more
        <FaLongArrowAltRight />
      </button>
      <scheduleCardData.icon className="icon" />
    </div>
  );
}
