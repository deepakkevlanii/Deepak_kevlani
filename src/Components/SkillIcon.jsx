import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillIcon({ icon, color }) {
    return (
        <div style={{ color: color, fontSize: '3rem' }}>
            {typeof icon === 'object' && icon.prefix ? (
                <FontAwesomeIcon icon={icon} />
            ) : (
                React.createElement(icon)
            )}
        </div>
    );
}

export default SkillIcon;
