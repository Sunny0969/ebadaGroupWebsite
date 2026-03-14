import { useState, useEffect } from "react";
import "./SocialProofNotification.css";

interface Notification {
  id: number;
  message: string;
  time: string;
}

const NOTIFICATIONS: Notification[] = [
  { id: 1, message: "Sarah from Tokyo just applied for Software Engineer position", time: "2 minutes ago" },
  { id: 2, message: "5 people applied for Manufacturing Supervisor role today", time: "15 minutes ago" },
  { id: 3, message: "New job posted: Senior Project Manager in Osaka", time: "1 hour ago" },
  { id: 4, message: "12 candidates found their dream job this week", time: "2 hours ago" },
  { id: 5, message: "Hiroshi from Nagoya just registered as a candidate", time: "3 hours ago" },
];

export default function SocialProofNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Show notifications randomly
    const interval = setInterval(() => {
      const randomNotification = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
      setNotifications(prev => [...prev, randomNotification]);
      
      // Remove after 5 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== randomNotification.id));
      }, 5000);
    }, 15000); // Show new notification every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="social-proof-container">
      {notifications.map((notification) => (
        <div key={notification.id} className="social-proof-notification">
          <div className="social-proof-notification__icon">🔔</div>
          <div className="social-proof-notification__content">
            <p className="social-proof-notification__message">{notification.message}</p>
            <span className="social-proof-notification__time">{notification.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
