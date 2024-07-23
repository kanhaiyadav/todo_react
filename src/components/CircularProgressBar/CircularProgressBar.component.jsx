import React, { useEffect, useState } from 'react'
import { BarContainer, ProgressBar } from './CircularProgressBar.styles';
const CircularProgressBar = ({ start, end}) => {
    const [percentage, setPercentage] = useState(start);
    useEffect(() => {
        const progress = setInterval(() => {
            setPercentage(prev => {
                if (prev < end) {
                    return prev + 1;
                } else {
                    clearInterval(progress);
                    return prev;
                }
            });
        }, 10);

        return () => clearInterval(progress);
    }, [end]);
    return (
      <BarContainer>
          <ProgressBar style={{
              background: `conic-gradient(#EE754e ${percentage*3.6}deg, transparent 0deg)`
          }}>
              <span>{percentage}%</span>
          </ProgressBar>
    </BarContainer>
  )
}

export default CircularProgressBar;