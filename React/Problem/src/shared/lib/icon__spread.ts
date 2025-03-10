import avatar1 from '@/shared/assets/image/girl1.png'
import avatar2 from '@/shared/assets/image/girl2.png'
import avatar3 from '@/shared/assets/image/girl3.png'
import avatar4 from '@/shared/assets/image/girl4.png'
import avatar5 from '@/shared/assets/image/girl5.png'
import aboutMainGirl2 from '@/shared/assets/image/girl-fiolBack.png'
import aboutMainGirl3 from '@/shared/assets/image/summer-girl.png'

import {StaticImageData} from "next/image";


interface IIconSpread {
    [key: string]: { src: StaticImageData, alt: string}[];
}

export const iconSpread: IIconSpread = {
    headerIcons: [
        {
            src: avatar1,
            alt: 'icon 1'
        },
        {
            src: avatar2,
            alt: 'icon 2'
        },
        {
            src: avatar3,
            alt: 'icon 3'
        },
        {
            src: avatar4,
            alt: 'icon 4'
        },
        {
            src: avatar5,
            alt: 'icon 5'
        }
    ],
    aboutGirls: [
        {
            src: aboutMainGirl2,
            alt: 'yellow girl'
        },
        {
            src: aboutMainGirl3,
            alt: 'summer girl'
        },

    ]
}
