import React from 'react'

import Icon1 from '../../images/awards.svg'
import Icon2 from '../../images/video.svg'
import Icon3 from '../../images/logo.png'
import {LatestContainer, LatestP, LatestH2, LatestH1, LatestIcon, LatestCard, LatestWrapper} from './NewsElements'


const Latest = () => {



    return (
        <LatestContainer id="Latest">
            <LatestH1>Latest</LatestH1>
            <LatestWrapper>

                <LatestCard>

                    <LatestIcon src={Icon1}/>
                    <LatestH2>Reduce Expenses</LatestH2>
                    <LatestP> We help reduce your fees and increase your overall revenue.</LatestP>
                </LatestCard>

                <LatestCard>
                    <LatestIcon src={Icon2}/>
                    <LatestH2>Virtual Offices</LatestH2>
                    <LatestP> You can access our platform online anywhere in the world.</LatestP>
                </LatestCard>

                <LatestCard>
                    <LatestIcon src={Icon3}/>
                    <LatestH2>Premium Benefits</LatestH2>
                    <LatestP>Unlock our special membership card that returns 5% cash back.</LatestP>
                </LatestCard>

            </LatestWrapper>
        </LatestContainer>
    )
}

export default Latest
