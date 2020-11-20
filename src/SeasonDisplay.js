import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    pageText: 'It\'s summer, let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    pageText: 'It\'s winter, brrr it\'s cold',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { pageText, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{pageText}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  )
};

export default SeasonDisplay;