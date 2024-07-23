import React from 'react'
import { PageContainer } from './Account.styles'
import PageSection from '../../../components/PageSection/PageSection.component'
import CustomButton from '../../../components/CustomButton/CustomButton.component'
import UsernameForm from './UsernameForm/UsernameForm.component'

const Account = () => {

    return (
        <PageContainer>
            <PageSection title={'Edit Profile'}>
                <div style={{ width: '100%' }}>
                    <p>Change Your username: </p>
                    <UsernameForm />
                </div>
            </PageSection>
            <PageSection title={'Delete Your Account'}>
                <p>Once you delete your account you won't be able to recover it</p>
                <CustomButton style={{ backgroundColor: 'red' }}>Delete Account</CustomButton>
            </PageSection>
        </PageContainer>
    )
}

export default React.memo(Account);