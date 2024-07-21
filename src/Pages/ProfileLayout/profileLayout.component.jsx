import React from 'react'
import { MainContainer, CommonInfo, UserInfo } from './profileLayout.styles'
import { useSelector } from 'react-redux'
import { selectAvatar, selectEmail, selectName } from '../../Redux/user/user.selector'
import { Outlet } from 'react-router-dom'
import { NavContainer } from './profileLayout.styles'
import HomeNavItem from '../../components/HomeNavItem/HomeNavItem.component'

const ProfileLayout = () => {
    const avatar = useSelector(selectAvatar);
    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
  return (
      <MainContainer>
          <CommonInfo>
              <img src={avatar} alt="profile" />
              <UserInfo>
                  <h1>{name}</h1>
                  <span>{email}</span>
              </UserInfo>
          </CommonInfo>
          <hr 
              style={{
                  width: "100%",
              }}
          />
          <NavContainer>
              <HomeNavItem link={"."}>Account</HomeNavItem>
              <HomeNavItem link={"settings"}>Settings</HomeNavItem>
          </NavContainer>
          <Outlet />
    </MainContainer>
  )
}

export default ProfileLayout