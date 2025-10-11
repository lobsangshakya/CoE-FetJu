import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mockProjects, mockAnnouncements, mockEvents, mockCOEs } from '../data/mockData';
import {
  TrophyIcon,
  SearchIcon,
  HandshakeIcon,
  GlobeIcon,
  CalendarIcon,
  UsersIcon,
  ChevronDownIcon
} from '../components/icons';
import Card from '../components/common/Card';

// ---------- StatItem ----------
const StatItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="p-6 text-center flex flex-col items-center justify-center group 
                 bg-black/20 backdrop-blur-md border border-white/30 
                 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl
                 transition-all duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
    <div className="mb-4 bg-orange-500/10 rounded-full p-4 border border-orange-500/30 transition-all duration-300 group-hover:bg-orange-500/20 group-hover:border-orange-500/50">
      <div className="text-orange-400 transition-transform duration-300 group-hover:scale-110">{icon}</div>
    </div>
    <p className="text-4xl font-bold text-white">{value}</p>
    <p className="text-gray-300 mt-1">{label}</p>
  </div>
);

// ---------- CommitteeMemberCard ----------
const CommitteeMemberCard: React.FC<{ name: string; title: string }> = ({ name, title }) => (
  <div className="bg-black/20 backdrop-blur-md border border-white/30 rounded-lg p-6 text-center transition-all duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-orange-400 mt-1">{title}</p>
  </div>
);

// ---------- AccordionItem ----------
const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/20 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-4 text-left text-lg font-semibold text-white hover:bg-white/10 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDownIcon className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <div className="p-4 bg-black/20 text-gray-300">{children}</div>
      </div>
    </div>
  );
};

// ---------- Sample Data ----------
const executiveCommittee = [
  { name: 'Dr. Kamlesh Tiwari', title: 'HoD / CSE' },
  { name: 'Dr. Deepak Sinha', title: 'Professor / CSE' },
  { name: 'Dr. A. Suresh Kumar', title: 'Professor / CSE' },
  { name: 'Dr. T. R. Mahesh', title: 'Associate Professor' },
];

const coeLeaders = [
  { title: 'AI & ML CoE', content: 'Dr. Swati Gupta – AI & ML CoE Leader' },
  { title: 'Cyber & Systems Security CoE', content: 'Dr. Sunanda Das – Cyber & Systems Security CoE Leader' },
  { title: 'IoT, Robotics CoE', content: 'Dr. Vikram Neerugatti – IoT & Robotics CoE Leader' },
  { title: 'Networking & HPC CoE', content: 'Dr. Nishant Tripathi – Networking & HPC CoE Leader' },
  { title: 'Theoretical CS CoE', content: 'Dr. Subhankar Ghosal – Theoretical CS CoE Leader' },
];

const coeLogoMap: { [key: string]: string } = {
  'ai-ml': 'https://i.postimg.cc/BZ71Rf5t/image.png',
  'cyber-security': 'https://i.postimg.cc/vZrTYJn9/image.png',
  'iot-robotics': 'https://i.postimg.cc/J0H79vm0/image.png',
  'networking-hpc': 'https://i.postimg.cc/XNt9p0rg/image.png',
  'theoretical-cs': 'https://i.postimg.cc/fbH9Z44d/image.png',
};

// ---------- HomePage ----------
const HomePage: React.FC = () => {
  const featuredProject = mockProjects[0];
  const latestAnnouncement = mockAnnouncements[0];
  const upcomingEvent = mockEvents[0];

  const newEvents = [
    { title: 'AI in Healthcare Webinar', date: '2024-10-15', category: 'WEBINAR', day: '15', month: 'OCT' },
    { title: 'Cybersecurity Workshop Series', date: '2024-10-22', category: 'WORKSHOP', day: '22', month: 'OCT' },
    { title: 'Annual Robotics Competition', date: '2024-11-01', category: 'COMPETITION', day: '01', month: 'NOV' },
    { title: 'Guest Lecture: Quantum Computing', date: '2024-11-10', category: 'LECTURE', day: '10', month: 'NOV' },
  ];

  const getCategoryTagStyle = (category: string) => {
    switch (category) {
      case 'WEBINAR': return 'bg-blue-500/50 text-blue-200';
      case 'WORKSHOP': return 'bg-purple-500/50 text-purple-200';
      case 'COMPETITION': return 'bg-green-500/50 text-green-200';
      case 'LECTURE': return 'bg-indigo-500/50 text-indigo-200';
      default: return 'bg-gray-500/50 text-gray-200';
    }
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(10,25,47,0.7), rgba(10,25,47,0.7)), url('https://i.postimg.cc/9zH91CXP/download.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <div style={backgroundStyle}>
      {/* Hero Section */}
      <section className="pt-12 pb-8 text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-4 px-4">
          <div className="h-16 m:h-20 lg:h-24 flex-shrink-0">
            <img src="https://i.postimg.cc/zv1LJqfk/image.png" alt="CoE Logo" className="h-full w-auto" />
          </div>
          <div>
            <h1 style={{ textShadow: '1px 1px 2px #cc6e00, -1px -1px 2px #cc6e00, 1px -1px 2px #cc6e00, -1px 1px 2px #cc6e00' }} 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Department of Computer Science and Engineering
            </h1>
            <p style={{ textShadow: '1px 1px 2px #cc6e00' }} className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-5">
              Center of Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Impact at a Glance</h2>
            <p className="mt-4 text-lg text-gray-300">Driving innovation and excellence across disciplines.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem icon={<SearchIcon className="h-12 w-12" />} value="200+" label="Faculty Enrolled" />
            <StatItem icon={<HandshakeIcon className="h-12 w-12" />} value="12+" label="Industry Collaborations" />
            <StatItem icon={<TrophyIcon className="h-12 w-12" />} value="25+" label="Papers Published" />
            <StatItem icon={<GlobeIcon className="h-12 w-12" />} value="40+" label="International Patents" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;