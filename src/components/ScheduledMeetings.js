import React, { useState } from 'react';
import styles from './ScheduledMeetings.module.scss'; // Import SCSS file

const meetingsData = [
  {
    id: 1,
    title: "Project Kickoff Meeting",
    date: "2024-03-27",
    time: "10:00 AM",
    participants: ["John Doe", "Jane Smith", "Michael Brown"],
  },
  {
    id: 2,
    title: "Brainstorming Session",
    date: "2024-03-28",
    time: "2:00 PM",
    participants: ["Jane Smith", "David Lee", "Sarah Jones"],
  },
  {
    id: 3,
    title: "Client Review",
    date: "2024-03-29",
    time: "11:00 AM",
    participants: ["John Doe", "Michael Brown", "Emily Garcia"],
  },
  {
    id: 4,
    title: "Progress Update",
    date: "2024-03-30",
    time: "9:00 AM",
    participants: ["Jane Smith", "David Lee", "Michael Brown"],
  },
  {
    id: 5,
    title: "Task Delegation",
    date: "2024-04-01",
    time: "3:00 PM",
    participants: ["John Doe", "Sarah Jones", "Emily Garcia"],
  },
  {
    id: 6,
    title: "Action Item Review",
    date: "2024-04-02",
    time: "1:00 PM",
    participants: ["John Doe", "Jane Smith", "David Lee"],
  },
  {
    id: 7,
    title: "Mid-Week Check-in",
    date: "2024-04-03",
    time: "10:30 AM",
    participants: ["Prakarsh Mohan", "Sarah Jones", "Emily Garcia"],
    },
    {
    id: 8,
    title: "Revisions and Feedback",
    date: "2024-04-04",
    time: "4:00 PM",
    participants: ["Chirayu Batra", "Jane Smith", "David Lee"],
    },
    {
    id: 9,
    title: "Project Wrap-up",
    date: "2024-04-05",
    time: "2:00 PM",
    participants: ["Chirayu Batra, Prakarsh Mohan"],
    },
];

const ScheduledMeetings = () => {
  const [meetings, setMeetings] = useState(meetingsData);

  return (
    <div className={styles.scheduledmeetings}>
      <h2 className={styles.header}>Scheduled Meetings</h2>
      {!meetings.length && <p>No scheduled meetings yet.</p>}
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
};

export default ScheduledMeetings;

// MeetingCard component (optional, for improved readability)
const MeetingCard = ({ meeting }) => {
  const { title, date, time, participants } = meeting;
  return (
    <div className={styles.meetingcard}>
      <div>
        <h3>{title}</h3>
        <p>
          <span className={styles.date}>{date}</span> at <span className={styles.time}>{time}</span>
        </p>
        <p>Participants: {participants.join(', ')}</p>
      </div>
      <button className={styles.joinCallButton} >
        Join Call
      </button>
    </div>
  );
};
