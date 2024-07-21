import React from 'react'
import { PageContainer } from './Account.styles'
import PageSection from '../../../components/PageSection/PageSection.component'
import CustomButton from '../../../components/CustomButton/CustomButton.component'

const Account = () => {
    return (
        <PageContainer>
            <PageSection title={'Edit Profile'}>
                <div style={{width:'100%'}}>
                    <p>Change Your username: </p>
                    <input
                        style={{
                            width: '50%',
                            border: '1px solid black',
                            borderRadius: '5px',
                            padding: '5px',
                            marginBottom: '5px',
                            marginTop: '5px',
                            background: 'transparent',
                            fontSize: '1.3rem'
                        }}
                    ></input>
                    <CustomButton style={{ backgroundColor: 'green' }}>Done</CustomButton>
                </div>
            </PageSection>
            <PageSection title={'Delete Your Account'}>
                <p>Once you delete your account you won't be able to recover it</p>
                <CustomButton style={{ backgroundColor: 'red' }}>Delete Account</CustomButton>
            </PageSection>
        </PageContainer>
    )
}

export default Account