import React from 'react'
import { PageContainer } from '../Account/Account.styles'
import PageSection from '../../../components/PageSection/PageSection.component'
import CustomButton from '../../../components/CustomButton/CustomButton.component'

const Settings = () => {
    return (
        <PageContainer>
            <PageSection title={'Appearance'}>
                <CustomButton effect={'scale'} style={{ backgroundColor: 'green' }}>Change Theme&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i></CustomButton>
            </PageSection>
        </PageContainer>
    )
}

export default Settings;