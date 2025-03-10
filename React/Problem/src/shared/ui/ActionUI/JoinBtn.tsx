import React from 'react';
import Image, {StaticImageData} from "next/image";

interface IJoinBtn {
    text: string
    classname?: string
    alt: string
    src: StaticImageData
}

const JoinBtn = (props: IJoinBtn) => {
    const {text, classname, alt, src} = props
    return (
        <a className={classname}>
            <Image src={src} alt={alt}/>
            {text}
        </a>
    );
};

export default JoinBtn;
