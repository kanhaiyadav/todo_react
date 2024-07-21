import React from 'react'
import { PageSectionContainer, Title } from './PageSection.styles'

const PageSection = ({title, children}) => {
  return (
    <PageSectionContainer>
          <Title>{title}</Title>
        {children}
    </PageSectionContainer>
  )
}

export default PageSection;