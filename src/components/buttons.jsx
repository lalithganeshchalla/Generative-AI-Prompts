import React from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { getCategoryStyle } from '../theme';

const categories = [
  { label: 'All', icon: <PeopleAltIcon /> },
  { label: 'Men', icon: <PersonIcon /> },
  { label: 'Women', icon: <Person2Icon /> },
  { label: 'Couples', icon: <FavoriteIcon /> },
  { label: 'Kids', icon: <ChildCareIcon /> },
  { label: 'Animals', icon: <PetsIcon /> },
];

const Buttons = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div
      style={{
        padding: '20px 16px',
        display: 'flex',
        justifyContent: 'flex-start',
        overflowX: 'auto',
        gap: '20px',
        background: '#FAFAFF',
      }}
    >
      {categories.map((category) => {
        const isActive = selectedCategory === category.label;
        const style = getCategoryStyle(category.label);
        return (
          <div
            key={category.label}
            style={{ textAlign: 'center', cursor: 'pointer', flexShrink: 0 }}
            onClick={() => setSelectedCategory(category.label)}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isActive ? style.grad : '#FFFFFF',
                color: isActive ? '#fff' : style.solid,
                border: isActive ? 'none' : `2px solid ${style.solid}33`,
                boxShadow: isActive ? `0 8px 20px ${style.solid}55` : 'none',
                transform: isActive ? 'translateY(-2px)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              {category.icon}
            </div>
            <div
              style={{
                marginTop: 6,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: isActive ? style.solid : '#6B7280',
              }}
            >
              {category.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Buttons;