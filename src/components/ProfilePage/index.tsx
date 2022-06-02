/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Feed from "../Feed/index"
import {
   Container,
   Banner,
   Avatar,
   ProfileData,
   LocationIcon,
   CakeIcon,
   Followage,
   EditButton,
} from "./style"

const ProfilePage = () => {
  return (
    <Container>
        <Banner>
            <Avatar/>
        </Banner>
        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Gabriel Custodio</h1>
            <h2>@custodio97</h2>
            <p>
                Developer  aT
                  <a href='#'>Exp</a>
            </p>
            <ul>
                <li>
                    <LocationIcon/>
                    Rio de janeiro,Brasil
                </li>
                <li>
                   <CakeIcon/>
                   Nascido(a) em 3 maio de 1997 
                </li>
            </ul>
            <Followage>
                <span>
                    seguindo <strong>45</strong>
                </span>
                <span>
                    <strong>54</strong> seguidores
                </span>
            </Followage>
        </ProfileData>
        <Feed/>
    </Container>
  )
}

export default ProfilePage