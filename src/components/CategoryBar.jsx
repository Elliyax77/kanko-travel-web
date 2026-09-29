import React from 'react';
import { destinationCategories } from '../data/kankoData';
import { Globe, Compass, Landmark, Palmtree, Sun, Plane } from 'lucide-react';
import './CategoryBar.css';

const iconMap = {
  Globe: Globe,
  Compass: Compass,
  Landmark: Landmark,
  Palmtree: Palmtree,
  Sun: Sun,
  Plane: Plane
};

const CategoryBar = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="category-bar-wrapper">
      <div className="container">
        <div className="category-pills-scroll" role="tablist" aria-label="Categorías de viaje">
          {destinationCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Globe;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                className={`category-pill ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <IconComponent size={16} className="pill-icon" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
