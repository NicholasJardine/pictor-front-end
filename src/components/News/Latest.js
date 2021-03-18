import React from 'react'

import Icon1 from '../../images/pearl.webp'
import Icon2 from '../../images/single.jpeg'
import Icon3 from '../../images/cousins.jpeg'
import {LatestContainer, LatestP, LatestH2, LatestH1, LatestH11, LatestIcon, LatestCard, LatestWrapper} from './NewsElements'


const Latest = () => {



    return (
        <LatestContainer >
                        <LatestH11>Pictor Online</LatestH11>

            <LatestH1>Latest</LatestH1>
            <LatestWrapper>

                <LatestCard>

                    <LatestIcon src={Icon1}/>
                    <LatestH2>Pearl Thusi shares some tips</LatestH2>
                    <LatestP> Some useful advice from one of SA's finest.

                    </LatestP>
                </LatestCard>

                <LatestCard>
                    <LatestIcon src={Icon2}/>
                    <LatestH2>Something worth Watching</LatestH2>
                    <LatestP> Seriously single - netflix and south africa's potential.</LatestP>
                </LatestCard>

                <LatestCard>
                    <LatestIcon src={Icon3}/>
                    <LatestH2>Reflecting on a Masterpiece
</LatestH2>
                    <LatestP>We take a look at what it took to create this classic film.</LatestP>
                </LatestCard>

            </LatestWrapper>
        </LatestContainer>
    )
}

export default Latest
