import React, { useEffect, useState } from 'react'
import { BarContainer, ProgressBar } from './CircularProgressBar.styles';
import { useTheme } from 'styled-components';

const CircularProgressBar = ({ start, end}) => {
    const [percentage, setPercentage] = useState(start);
    const theme = useTheme();
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
              background: `conic-gradient(${theme.colors.primary} ${percentage*3.6}deg, transparent 0deg)`
          }}>
              <span>{percentage}%</span>
          </ProgressBar>
    </BarContainer>
  )
}

export default CircularProgressBar;